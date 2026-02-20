#!/bin/bash
set -e

# Configuration
S3_BUCKET="${S3_BUCKET:-chikumo-ramen-site}"
CF_DISTRIBUTION_ID="${CF_DISTRIBUTION_ID:-}"
AWS_REGION="${AWS_REGION:-ap-northeast-1}"

echo "🔨 Building Astro site..."
npm run build

echo "📦 Syncing to S3..."
aws s3 sync dist/ "s3://${S3_BUCKET}" \
  --delete \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html"

# HTML files with shorter cache
aws s3 sync dist/ "s3://${S3_BUCKET}" \
  --delete \
  --cache-control "public, max-age=300" \
  --include "*.html" \
  --exclude "*" \
  --content-type "text/html; charset=utf-8"

if [ -n "$CF_DISTRIBUTION_ID" ]; then
  echo "🔄 Invalidating CloudFront cache..."
  aws cloudfront create-invalidation \
    --distribution-id "$CF_DISTRIBUTION_ID" \
    --paths "/*"
fi

echo "✅ Deploy complete!"
