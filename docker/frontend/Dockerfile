FROM node:alpine as build

WORKDIR /app

COPY frontend/package*.json ./

RUN npm  install
COPY frontend .
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]