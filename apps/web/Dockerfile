FROM node:current-alpine3.16

WORKDIR /app

COPY ["./build/", "./package.json", "./"]

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD [ "node", "index.js"  ]