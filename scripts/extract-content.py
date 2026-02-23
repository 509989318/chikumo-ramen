#!/usr/bin/env python3
"""Extract text content from all pages for i18n data files."""
import re
import json
import os
from html.parser import HTMLParser

class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.texts = []
        self.current = []
        self.skip = False
        self.skip_tags = {'style', 'script', 'noscript'}
        self.depth = 0
    
    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip = True
            self.depth += 1
    
    def handle_endtag(self, tag):
        if tag in self.skip_tags:
            self.depth -= 1
            if self.depth <= 0:
                self.skip = False
                self.depth = 0
    
    def handle_data(self, data):
        if not self.skip:
            text = data.strip()
            if text:
                self.texts.append(text)

base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
pages = ['index', 'philosophy', 'about', 'our-ramen', 'location', 'gallery', 'recruit', 'contact-us']
langs = ['ja-jp', 'zh-tw', 'en-us']

for lang in langs:
    print(f"\n{'='*60}")
    print(f"LANG: {lang}")
    print(f"{'='*60}")
    for page in pages:
        if page == 'index':
            path = os.path.join(base, f'public/{lang}/index.html')
        else:
            path = os.path.join(base, f'public/{lang}/{page}/index.html')
        
        if not os.path.exists(path):
            continue
        
        with open(path) as f:
            html = f.read()
        
        extractor = TextExtractor()
        extractor.feed(html)
        
        # Filter out common nav items and noise
        nav_items = {'TOP', 'PHILOSOPHY', 'ABOUT', 'OUR RAMEN', 'LOCATION', 'RECRUIT', 'GALLERY', 'CONTACT US', 'JP', 'TW', 'EN', 'X', 'Order now', 'Instagram', 'Icon-facebook-2', '@ Chikumo.Inc.'}
        
        unique_texts = []
        seen = set()
        for t in extractor.texts:
            if t not in nav_items and t not in seen and len(t) > 1:
                seen.add(t)
                unique_texts.append(t)
        
        print(f"\n--- {page} ---")
        for t in unique_texts[:30]:
            if len(t) > 100:
                print(f"  {t[:100]}...")
            else:
                print(f"  {t}")
