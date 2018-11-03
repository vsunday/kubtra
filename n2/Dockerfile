FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install --only=production

EXPOSE 3001
CMD ["node", "index.js"]
