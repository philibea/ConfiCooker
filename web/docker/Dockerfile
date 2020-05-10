FROM node:14-stretch-slim as builder

WORKDIR /usr/src/app
COPY ./web/package.json  .
COPY ./web/yarn.lock .

RUN ls

RUN yarn --pure-lockfile


COPY ./web .

RUN yarn build

FROM nginx:1.17-alpine

COPY ./web/nginx/nginx-mime.types /etc/nginx/mime.types
COPY ./web/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /var/www/html

EXPOSE 80/tcp



