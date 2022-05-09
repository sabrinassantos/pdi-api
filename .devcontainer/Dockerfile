FROM node:14.17.4

# node may come with an older version of npm. Ensure we have a specific npm.
RUN npm install -g npm@6.14.14
RUN apk update && apk add shadow --no-cache

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

USER node

ENTRYPOINT [ "node", "dist/main.js" ]