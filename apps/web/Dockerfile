FROM node:current-alpine3.16

WORKDIR /app

COPY ["build/*", "./"]

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

USER nobod

CMD [ "node", "index.js"  ]