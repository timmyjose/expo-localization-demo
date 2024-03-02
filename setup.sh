#!/usr/bin/env bash

echo "Removing ios and android directories..."
rm -rf ios android

echo "Performing prebuild..."
npx expo prebuild