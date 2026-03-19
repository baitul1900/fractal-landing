#!/bin/bash

# Script to optimize images by converting them to WebP format
# Also updates import statements in source files to reflect the new .webp extension

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "ImageMagick is not installed. Please install it first (e.g., sudo apt install imagemagick)."
  exit 1
fi

echo "Converting images in public/ to WebP..."

# Find and convert all image files to WebP
find public/ -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.bmp" \) | while read file; do
  echo "Converting $file to WebP"
  convert "$file" -quality 80 "${file%.*}.webp"
  rm "$file"
done

echo "Updating import statements in source files..."

# Update import paths in JS/JSX/TS/TSX/CSS files
find app/ components/ lib/ util/ data/ -type f \( -iname "*.js" -o -iname "*.jsx" -o -iname "*.ts" -o -iname "*.tsx" -o -iname "*.css" \) -exec sed -i 's/\.png/\.webp/g; s/\.jpg/\.webp/g; s/\.jpeg/\.webp/g; s/\.gif/\.webp/g; s/\.bmp/\.webp/g' {} \;

echo "Image optimization complete."