const prisma = require("../prisma/client");
exports.create = async (req, res) => {
  res.json(await prisma.bill.create({ data: req.body }));
};
exports.getAll = async (_, res) => {
  res.json(await prisma.bill.findMany({ include: { payment: true } }));
};