FROM node:14-alpine

WORKDIR /app

COPY *.json ./

RUN npm install
RUN npm i nodemon -g
RUN npm i ts-node -g

COPY ./src ./src

CMD ["npm", "run", "start"]
EXPOSE 8080
