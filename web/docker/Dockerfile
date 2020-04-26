FROM node:14-stretch-slim as builder

WORKDIR /usr/src/app
COPY ./package.json ./yarn.lock 

RUN yarn --pure-lockfile

COPY . .

RUN yarn build

FROM nginx:1.17-alpine

COPY ./nginx/nginx-mime.types /etc/nginx/mime.types
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /var/www/html

EXPOSE 80/tcp



