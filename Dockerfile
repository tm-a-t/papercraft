# check=skip=FromAsCasing
FROM node:24-slim as builder
WORKDIR /build

RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn \
    corepack enable && \
    yarn install

COPY .vitepress .vitepress
COPY components components
COPY pages pages
COPY scripts scripts

RUN yarn build

FROM openresty/openresty:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/.vitepress/dist /dist

EXPOSE 80
