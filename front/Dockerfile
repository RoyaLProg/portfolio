FROM node:latest

WORKDIR /opt/frontend

RUN npm install -g pnpm@latest-10

EXPOSE 5173

ENTRYPOINT ["/bin/sh", "setup.sh"]
