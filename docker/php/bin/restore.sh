#!/bin/bash

echo "Restoring files from directory"

source_dir=/backup/public/*

target_dir=/var/www/storage/app/public

for file in $source_dir
do
    filename=$(basename -- $file .zip)
    unzip -o $file -d $target_dir/$filename
done

echo "Restoring files done"
