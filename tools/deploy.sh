#!/bin/bash
set -e

cd "$(dirname "$0")"

if [ ! -f "out.zip" ]; then
    echo "Error: out.zip not found. Aborting deployment."
    exit 1
fi

echo "Cleaning old deployment..."

find . -mindepth 1 \( \
    -name 'deploy.sh' -o \
    -name 'out.zip' -o \
    -name '*.elkhantour.com' \
  \) -prune -o -exec rm -rf {} +

echo "Extracting out.zip..."
unzip -o out.zip -d .

if [ -d "out" ]; then
    echo "Flattening out/ into ./"
    shopt -s dotglob nullglob
    mv out/* .
    shopt -u dotglob nullglob
    rmdir out
fi

rm -f out.zip

echo "Deployment complete."
