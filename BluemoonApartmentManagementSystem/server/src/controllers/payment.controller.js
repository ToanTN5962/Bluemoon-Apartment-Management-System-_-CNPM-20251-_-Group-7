const prisma = require("../prisma/client");
exports.create = async (req, res) => {
  res.json(await prisma.payment.create({ data: req.body }));
};