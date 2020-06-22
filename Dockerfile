FROM keymetrics/pm2:latest-alpine

WORKDIR /var/www/app
COPY ./ ./
RUN npm i --force

ENV NODE_ENV production 
ENV PORT 3000

EXPOSE 3000

RUN npm run build

CMD ["npm", "start"]
