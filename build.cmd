git config --global credential.helper "cache --timeout=40000"

git pull

git add .
git commit -m %1
git push origin master
