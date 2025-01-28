# STAGE 1: Build
FROM node:20-alpine as build
WORKDIR /app

# 复制 package.json 和 package-lock.json（如果有）
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# 复制其余的源代码
COPY . .

# 运行构建命令，生成 dist 目录
RUN npm run build

# STAGE 2: Serve with Nginx
FROM nginx:1.25-alpine
LABEL author="pevan"

# 确保 dist 目录被正确复制
COPY --from=build /app/dist/homepage /usr/share/nginx/html

# 复制 Nginx 配置文件
COPY --from=build /app/iac/nginx.conf /etc/nginx/conf.d/default.conf
