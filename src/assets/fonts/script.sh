#!/bin/bash
for filename in ./*.otf; do
    echo "'${filename}': require('./assets/fonts/$filename')"
done