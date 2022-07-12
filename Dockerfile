FROM node:16-alpine as builder
WORKDIR /build
COPY . .
RUN npm run build

FROM nginx 
COPY --from=builder ./dist/ /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d