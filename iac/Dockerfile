FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


# STAGE 2
FROM nginx:1.25-alpine
LABEL author="pevan"

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/homepage/browser /usr/share/nginx/html
COPY /iac/nginx.conf /etc/nginx/conf.d/default.conf
