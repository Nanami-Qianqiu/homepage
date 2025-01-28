FROM node:20-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build


# STAGE 2
FROM nginx:1.25-alpine
LABEL author="pevan"

COPY /dist/homepage /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
