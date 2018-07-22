FROM node:8
WORKDIR /app
COPY server.js /app
RUN npm install elasticsearch
CMD node server.js
EXPOSE 8080
