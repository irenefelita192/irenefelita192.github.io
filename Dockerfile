FROM node:12-alpine

WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

COPY package.json yarn.lock next.config.js public ./
COPY . ./

RUN ls ./
RUN echo "run ls node modules"
RUN ls /app
RUN ls /app/node_modules
RUN ls /app/node_modules/.bin
RUN ls /app/node_modules/.bin/next

EXPOSE 3000

ENTRYPOINT [ "yarn" ]

CMD [ "start" ]
