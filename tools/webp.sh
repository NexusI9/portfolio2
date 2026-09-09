#!/bin/bash

set -e

ASSETS_DIR="public/assets"

case "$1" in

    convert)
        echo "Converting PNGs to WebP..."

        find "$ASSETS_DIR" -type f -iname '*.png' | while read -r file; do
            webp="${file%.*}.webp"
            backup="${file}.bak"

            echo "$file → $webp"

            magick "$file" -quality 85 "$webp"

            # Keep the original as .png.bak
            mv "$file" "$backup"
        done

        echo "Conversion complete."
        ;;

    clean)
        echo "Removing PNG backups..."

        find "$ASSETS_DIR" -type f -name '*.png.bak' -delete

        echo "Cleanup complete."
        ;;

    revert)
        echo "Reverting WebP conversion..."

        # Remove generated WebPs
        find "$ASSETS_DIR" -type f -iname '*.webp' -delete

        # Restore PNGs
        find "$ASSETS_DIR" -type f -name '*.png.bak' | while read -r backup; do
            original="${backup%.bak}"

            echo "$backup → $original"

            mv "$backup" "$original"
        done

        echo "Revert complete."
        ;;

    *)
        echo "Usage: $0 {convert|clean|revert}"
        exit 1
        ;;

esac
