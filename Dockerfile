FROM node:12-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock ./



RUN ls
RUN yarn --production

COPY . ./

EXPOSE 3000

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]
