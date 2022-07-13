FROM node:16-alpine as builder
WORKDIR /build
COPY . .
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org \
    && cnpm install \
    && npm run build

FROM nginx:1.22.0-alpine
COPY --from=builder /build/dist/ /usr/share/nginx/html