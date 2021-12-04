FROM node:16

WORKDIR /app

COPY ./package.json .

RUN npm cache clean --force
RUN npm install
COPY . .

ENV DB_PORT=5432
ENV DB_NAME=db_challenge
ENV DB_USER=user
ENV DB_PASS=pass
ENV DB_HOST=postgres
ENV NODE_ENV=development
ENV PORT=8080

EXPOSE 8080

# CMD npm start
CMD [ "node", "server.js" ]