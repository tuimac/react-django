FROM alpine:latest

WORKDIR /root

EXPOSE 80
EXPOSE 8000

ADD nginx.conf /etc/nginx/nginx.conf
ADD entrypoint.sh /root/entrypoint.sh

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git python3 python3-dev py3-pip nodejs npm curl tree nginx mysql-client

ENTRYPOINT ["/root/entrypoint.sh"]
