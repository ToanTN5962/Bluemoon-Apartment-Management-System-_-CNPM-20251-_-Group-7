const prisma = require("../prisma/client");

exports.create = async (req, res) => {
  res.json(await prisma.resident.create({ data: req.body }));
};

exports.getAll = async (_, res) => {
  res.json(await prisma.resident.findMany({ include: { household: true } }));
};

exports.getById = async (req, res) => {
  res.json(await prisma.resident.findUnique({
    where: { id: Number(req.params.id) },
    include: { household: true }
  }));
};

exports.update = async (req, res) => {
  res.json(await prisma.resident.update({
    where: { id: Number(req.params.id) },
    data: req.body
  }));
};

exports.remove = async (req, res) => {
  await prisma.resident.delete({ where: { id: Number(req.params.id) } });
  res.json({ deleted: true });
};
