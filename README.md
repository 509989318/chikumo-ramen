# 千雲 (Chikumo) - Static Site

https://chikumo-ramen.com/ の静的HTML再現サイト

## 起動方法

```bash
docker compose up
```

ブラウザで http://localhost:8080 にアクセス

## ファイル構成

```
chikumo-ramen/
├── index.html              # TOP (日本語 - デフォルト)
├── ja-jp/                  # 日本語ページ
│   ├── philosophy/
│   ├── about/
│   ├── our-ramen/
│   ├── location/
│   ├── gallery/
│   └── contact-us/
├── zh-tw/                  # 繁體中文ページ
│   ├── index.html
│   ├── philosophy/
│   ├── about/
│   ├── our-ramen/
│   ├── location/
│   ├── gallery/
│   └── contact-us/
├── en-us/                  # English ページ
│   ├── index.html
│   ├── philosophy/
│   ├── about/
│   ├── our-ramen/
│   ├── location/
│   ├── gallery/
│   └── contact-us/
├── assets/
│   ├── css/style.css       # 共通スタイル
│   ├── js/main.js          # モバイルメニュー等
│   └── images/             # 全画像アセット
├── docker-compose.yml
├── nginx.conf
└── README.md
```

## 多言語

- **JP** (日本語): `/` (デフォルト)
- **TW** (繁體中文): `/zh-tw/`
- **EN** (English): `/en-us/`

ヘッダーとフッターの言語切替から各言語に遷移可能

## 技術スタック

- 素のHTML/CSS/JS（フレームワーク不使用）
- Google Fonts (Noto Serif JP, Inter, Jost)
- Font Awesome 6 (アイコン)
- nginx (Docker)
