FROM node:current-alpine3.16

# set a non privileged user to use when running this image
RUN addgroup -S nodejs && adduser -S nodejs -G nodejs
USER nodejs

# set right (secure) folder permissions
RUN mkdir /app && chown -R nodejs:nodejs /app

WORKDIR /app

COPY --chown=nodejs:nodejs  ["./build/", "./package.json", "./"]


ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD [ "node", "index.js"  ]