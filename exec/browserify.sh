#!/bin/bash

echo -e "Running browserify...\n" && npx browserify ./project/js/main.js -o ./project/js/bundle.js && echo -e "Successfully browserified!\n"