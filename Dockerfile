FROM swaggerapi/swagger-ui

# swagger-initializer.js を上書きする
COPY ./swagger-initializer.js /usr/share/nginx/html/swagger-initializer.js