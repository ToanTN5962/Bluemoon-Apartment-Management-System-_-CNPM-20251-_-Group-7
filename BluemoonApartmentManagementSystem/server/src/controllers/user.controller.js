const prisma = require("../prisma/client");

exports.getAll = async (_, res) => {
  res.json(await prisma.user.findMany());
};

exports.getById = async (req, res) => {
  res.json(await prisma.user.findUnique({
    where: { id: Number(req.params.id) }
  }));
};

exports.updateProfile = async (req, res) => {
  const { id } = req.params;
  const { fullName, phoneNum, email } = req.body; 
  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { 
        fullName: fullName,
        phoneNum: phoneNum,
      }
    });
    res.status(200).json({
      message: "Profile updated successfully.",
      data: updatedUser
    });
  } catch (err) {
    console.error("Error updating profile:", err);
    if (err.code === 'P2025') {
      return res.status(404).json({
        message: "User not found."
      });
    }
    res.status(500).json({
      message: "Internal server error."
    });
  }
};