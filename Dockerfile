### STAGE 1: Build ###
FROM registry.turacocloud.com/turaco-package/node:16.14.0 as build-stage
ARG PROFILE

WORKDIR /app
COPY package*.json ./

RUN npm install yarn
RUN yarn install
COPY . .
RUN yarn run build

### STAGE 2: Setup ###
FROM registry.turacocloud.com/turaco-package/nginx:1.17.6-alpine

## Copy our default nginx config
COPY custom-nginx.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build-stage /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
