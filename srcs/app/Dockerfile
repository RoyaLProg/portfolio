FROM node:21

WORKDIR /opt/app

COPY package.json ./

RUN ls -la
RUN npm i

COPY . .

CMD ["npm", "run", "dev"]
