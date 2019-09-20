#!/bin/bash

echo ""
echo $0
echo ""
echo "git stash"
echo ""
git stash
echo ""
#git add .
git add README.md
echo ""
echo 'git pull origin master --rebase'
echo ""
git pull origin master --rebase
echo ""
echo "git rebase --continue"
echo ""
git rebase --continue
echo ""
