#! /bin/bash

echo "Push bucket ready..."

# Push Assets to CDN
# echo "List of static assets"
# ls -laR build/static

echo "Pushing assets to CDN..."
gsutil -m -h "Cache-Control:public,max-age=31556952" -q cp -r build/static/* ${GCS_PATH}/assets/microsite/_next/static/

# echo "List of CDN static files: ${GCS_PATH}"
# gsutil ls ${GCS_PATH}/assets/microsite/_next/static
# gsutil ls ${GCS_PATH}/assets/microsite/_next/static/chunks
# gsutil ls ${GCS_PATH}/assets/microsite/_next/static/chunks/pages