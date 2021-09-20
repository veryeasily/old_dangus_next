FROM node:16-slim

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app
USER node

EXPOSE 3000