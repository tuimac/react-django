FROM alpine:latest

WORKDIR /root

ARG git_user=tuimac
ARG git_repo=react-django

EXPOSE 80
EXPOSE 8000

ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /root/entrypoint.sh
ADD requirements.txt /root/requirements.txt

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git python3 python3-dev py3-pip nodejs npm curl tree nginx mysql-client gcc g++ mariadb-dev && \
    pip3 install -r requirements.txt && \
    git clone https://github.com/$git_user/$git_repo && \
    cd /root/$git_repo/src/frontend && \
    npm install && \
    npm update --force

ENTRYPOINT ["/root/entrypoint.sh"]
