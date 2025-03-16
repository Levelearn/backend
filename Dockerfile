# Gunakan Node.js Alpine sebagai base image (ringan dan cepat)
FROM node:22-alpine

# Install dependensi sistem yang diperlukan
RUN apk add --no-cache git bash

# Set working directory ke dalam project
WORKDIR /app/levelearn/api

# Clone backend dari GitHub ke dalam folder "backend"
RUN git clone 'https://github.com/Levelearn/backend.git'

# Set working directory ke dalam folder backend
WORKDIR /app/levelearn/api/backend

# Install dependensi
RUN npm install

# Buat file .env langsung di dalam container (karena tidak ada di Git)
RUN echo "DB_HOST=db" > .env && \
    echo "DB_USER=root" >> .env && \
    echo "DB_PASSWORD=root" >> .env && \
    echo "DB_DATABASE=graphci" >> .env && \
    echo "JWT_SECRET=your_secret_token" >> .env && \
    echo "DATABASE_URL=\"mysql://root:root@db:3306/graphci\"" >> .env

# Generate Prisma Client (jika menggunakan Prisma ORM)
RUN npx prisma generate

# Ekspos port yang digunakan aplikasi
EXPOSE 4000

# Jalankan migrasi database dan kemudian jalankan aplikasi
CMD ["sh", "-c", "npx prisma migrate deploy || npx prisma migrate dev --name init && node ./src/index.js"]
