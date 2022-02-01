#/bin/bash

cd /home/ubuntu/${2}/docker/prod
export DOCKER_USER=$1
docker-compose down
docker rmi ${DOCKER_USER}/web
docker rmi ${DOCKER_USER}/application
docker-compose up -d
git pull
cd docker/prod