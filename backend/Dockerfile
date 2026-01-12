FROM node:latest

WORKDIR /opt/backend

RUN npm install -g pnpm@latest-10

EXPOSE 3000

ENTRYPOINT ["/bin/sh", "setup.sh"]
