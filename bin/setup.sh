#!/usr/bin/env sh

## Step 1: Get AWS CLI
# Is this pre-installed?

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "bin/awscliv2.zip"
unzip -o bin/awscliv2.zip -d bin/aws-installer

# This script really doesn't do well without absolute paths so try and be in the
# directory it will run in.
cd bin
./aws-installer/aws/install -i aws-cli -b .
cd ..

## Step 2: Pull original images
# @TODO: Save and restore image variant cache?
./bin/aws-cli/v2/2.3.6/bin/aws s3 sync $ASSETS_FOLDER/photos/ photos/

## Step 3: Typefaces?
