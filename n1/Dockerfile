FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install --only=production

EXPOSE 3000
CMD ["node", "index.js"]
