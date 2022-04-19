#!/usr/bin/env bash

export $(grep -v '^#' .env | xargs)

# for photo in $(find photos/ -type f | sed --expression='s/photos\///g')
find photos/ -type f | sed --expression='s/photos\///g' | while read -r photo
do
  [[ "$photo" == "metadata.json" ]] && continue
  grep -r "$photo" _adventures/ _hobbies/ > /dev/null || echo $photo is unused
done
