rm -rf dist
npm run build
git add .
git commit -m "$1"
git push
sleep 3
curl http://147.182.251.92:8518/server/deploy/base-create
