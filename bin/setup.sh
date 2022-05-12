#!/usr/bin/env sh

export $(grep -s -v '^#' .env.local | xargs)

## Step 1: Get AWS CLI
# Is this pre-installed?

if [ ! -d "bin/aws-cli" ]; then
  curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "bin/awscliv2.zip"

  # This script really doesn't do well without absolute paths so try and be in the
  # directory it will run in.
  cd bin
  unzip -q -o awscliv2.zip
  ./aws/install -i $(pwd)/aws-cli -b .
  cd ..
fi


## Step 2: Pull original images
# @TODO: Save and restore image variant cache?
# @TODO: On initial trial with CFR2, aws s3 sync failed silently but aws s3 cp
#        worked fine. Sync would be faster locally bc it would only dl changes.
./bin/aws-cli/v2/current/bin/aws configure set default.s3.signature_version s3v4
./bin/aws-cli/v2/current/bin/aws s3 --endpoint-url $R2_ENDPOINT cp $ASSETS_FOLDER/photos photos --recursive

## Step 3: Typefaces?
