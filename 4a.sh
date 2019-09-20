#!/bin/bash

echo ""
echo $0
echo ""
echo "git stash"
echo ""
git stash
echo ""
echo "git add README.md"
echo ""
#git add .
git add .
echo ""
echo 'git commit -m "fun commit for README.md"'
echo ""
git commit -m "fun commit for ... all"
echo ""
echo "git push origin master"
echo ""
git push origin master
echo ""
