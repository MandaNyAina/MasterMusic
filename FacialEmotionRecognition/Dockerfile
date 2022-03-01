FROM python:3.11.0a5-buster

ARG APP_NAME=MyApp
ARG ENV=development

COPY . /var/www/${APP_NAME}/
WORKDIR /var/www/${APP_NAME}

RUN pip3 install --no-cache-dir -r requirements.txt \
    && export FLASK_APP=${APP_NAME} \
    && export FLASK_ENV=${ENV}

EXPOSE 5000

CMD [ "flask", "run", "--host=0.0.0.0" ]
