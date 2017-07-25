#!/usr/bin/env zsh

for proj in *; do
    if [ -d "${proj}" ]; then
        echo Testing "${proj}".
		cd "${proj}"
		yarn
		rm -rf dist.prod
		yarn build
		echo Sizes:
		ls -ls dist.prod
		echo Gzipped:
		gzip -c dist.prod/*.js | wc -c
		cd ..
    fi
done

