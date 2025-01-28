FROM node:20-alpine as build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


# STAGE 2
FROM nginx:1.25-alpine
LABEL author="pevan"

COPY /iac/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/homepage /usr/share/nginx/html
