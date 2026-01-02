const { PrismaClient } = require("@prisma/client");
const { PrismaPlanetScale } = require("@prisma/adapter-planetscale");
const mysql = require("mysql2/promise");

const connection = mysql.createConnection(process.env.DATABASE_URL);
const adapter = new PrismaPlanetScale(connection);

const prisma = new PrismaClient({ adapter });

module.exports = prisma;
