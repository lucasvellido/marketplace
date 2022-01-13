FROM node:17.3.0-alpine3.15

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@8.1.6

USER node

WORKDIR /home/node/app