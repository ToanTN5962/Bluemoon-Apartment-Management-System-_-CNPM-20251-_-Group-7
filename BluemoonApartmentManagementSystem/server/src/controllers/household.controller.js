const prisma = require("../prisma/client");

exports.create = async (req, res) => {
  res.json(await prisma.household.create({ data: req.body }));
};

exports.getAll = async (_, res) => {
  res.json(await prisma.household.findMany({
    include: { resident: true }
  }));
};
