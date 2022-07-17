#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件

yarn build

# 进入生成的文件夹

cd docs/.vuepress/dist

git config --global user.email "719887163@qq.com"
git config --global user.name "xia0hj"

git init
git add -A
git commit -m 'deploy'

# dist 默认的是 master 分支，最后的参数表示将本地的 master 分支推送到远程的 gh-pages 分支上，注意不是 main 分支
git push -f https://${ACCESS_TOKEN}@github.com/xia0hj/xia0hj.github.io.git master:gh-pages

cd -
