ARG NGINX_VERSION="1.17.5"
ARG NODE_VERSION="12.13.0"

# build the app
FROM node:${NODE_VERSION} as build

WORKDIR /app

COPY ./ /app

RUN npm install -g @nrwl/cli \
  && npm install \
  && nx build --prod

# serve app
FROM nginx:${NGINX_VERSION} AS nginx

COPY --from=build /app/dist/apps/xavier /app

RUN rm /etc/nginx/conf.d/default.conf

COPY ./docker/nginx/configs /etc/nginx/conf.d

EXPOSE 4200
