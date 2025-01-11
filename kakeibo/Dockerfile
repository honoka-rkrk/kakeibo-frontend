FROM node:18-slim

WORKDIR /kakeibo

COPY . .

RUN apt update && apt install -y bash

RUN yarn global add expo

RUN yarn install

CMD yarn start