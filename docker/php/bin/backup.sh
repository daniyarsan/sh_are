#!/bin/bash

echo "Creation of archive with media files"

SOURCE_DIR=/var/www/storage/app/public/*
BACKUP_DIR=/backup/public
TIMESTAMP=$(date +"%Y%m%d%H%M%S")

mkdir -p $BACKUP_DIR

for dir in $SOURCE_DIR
do
    filename=$(basename -- $dir .zip)
    cd $dir;
    zip -r $BACKUP_DIR/$filename ./
done

echo "Saving media files done"



