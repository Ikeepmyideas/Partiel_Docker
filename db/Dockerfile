FROM mysql:latest

ENV MYSQL_DATABASE=au_temps_donne
ENV MYSQL_ROOT_PASSWORD=root

#copy sql script to docker-entrypoint-initdb.d
COPY ./script/ /docker-entrypoint-initdb.d/