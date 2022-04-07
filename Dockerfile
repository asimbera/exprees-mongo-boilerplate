FROM node:alpine as builder

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn build

# Copy to final image
FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN yarn install --production --frozen-lockfile

RUN mkdir -p /app/dist
COPY --from=builder /app/dist ./dist

ENTRYPOINT [ "node", "./dist/index.js" ]
