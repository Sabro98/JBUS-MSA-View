FROM node:14-slim

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run compile

EXPOSE 8002

CMD ["npm", "start"]