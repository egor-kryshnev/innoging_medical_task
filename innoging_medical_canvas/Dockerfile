FROM node:16-alpine AS base

WORKDIR /app

COPY package.json .

RUN npm i

FROM node:16-alpine AS build

WORKDIR /app

COPY --from=base /app/node_modules /app/node_modules

COPY . .

CMD ["npm", "start"]