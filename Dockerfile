FROM ubuntu:latest
LABEL authors="Levelearn"

# Install dependencies
RUN apt update && apt upgrade -y
RUN apt install -y nodejs npm openssl

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 7000

CMD ["node", "./src/index.js"]