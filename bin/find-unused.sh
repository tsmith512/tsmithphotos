#!/usr/bin/env bash

find photos/ -type f | sed --expression='s/photos\///g' | while read -r photo
do
  [[ "$photo" == "metadata.json" ]] && continue
  grep -r "$photo" _posts/ > /dev/null || echo $photo is unused
done
