npm run build
rm -rf dist
mv build dist
git add .
git commit -m "$1"
git push
curl http://147.182.251.92:8518/server/deploy/base-create
