FROM node:14

WORKDIR /usr/src/app
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .
EXPOSE 8080
RUN apt update && apt install -y mysql-server

CMD ["yarn", "start"]
