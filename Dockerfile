FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock .npmrc  ./

RUN ls
RUN yarn --production



COPY . .

RUN ls

EXPOSE 3000

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]
