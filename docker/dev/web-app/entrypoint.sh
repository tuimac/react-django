#!/bin/bash

cd /root/react-django/src/frontend
npm start &

cd /root/react-django/src/backend
python3 manage.py makemigrations --no-input
python3 manage.py migrate
python3 manage.py migrate --fake
python3 manage.py runserver 0.0.0.0:8000 &

/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
