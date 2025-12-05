FROM node:18-alpine
WORKDIR /app

# copy package files and install only production deps
COPY package*.json ./
RUN npm install --production

# copy app source
COPY . .

EXPOSE 3000
CMD ["node","app.js"]
