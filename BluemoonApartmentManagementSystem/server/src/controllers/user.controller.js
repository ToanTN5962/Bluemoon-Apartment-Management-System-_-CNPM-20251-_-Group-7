const prisma = require("../prisma/client");

exports.getAll = async (_, res) => {
  res.json(await prisma.user.findMany());
};

exports.getById = async (req, res) => {
  res.json(await prisma.user.findUnique({
    where: { id: Number(req.params.id) }
  }));
};
