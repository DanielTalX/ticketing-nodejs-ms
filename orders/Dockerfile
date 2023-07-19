FROM node:alpine

WORKDIR /app
COPY package*.json .
COPY local-packages ./local-packages
RUN npm install --omit=dev
COPY . .

CMD ["npm", "start"]
