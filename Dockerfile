FROM node:14.17.6

WORKDIR /frontend

RUN apt update -y && \
    apt upgrade -y && \
    npm install -g @vue/cli
