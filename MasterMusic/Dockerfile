FROM node:14-alpine3.14 AS env-dev-stage

WORKDIR /var/www/

RUN npm install -g ionic@5 \
    && npm install -g cordova \
    && npm install -g karma-cli

EXPOSE 8200

CMD [ "ionic", "serve", "--port", "8200", "--external" ]
