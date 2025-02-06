const { PrismaClient } = require('@prisma/client');  // Mengimpor PrismaClient
const prisma = new PrismaClient();  // Membuat instance PrismaClient

module.exports = prisma;  // Mengekspor prisma untuk digunakan di tempat lain
