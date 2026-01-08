const prisma = require("../prisma/client");
// tạo bản ghi fee mới và lưu nó trong database
exports.create = async (req, res) => {
  res.json(await prisma.fee.create({ data: req.body }));
};
// lấy tất cả bản ghi từ bảng fee
exports.getAll = async (_, res) => {
  res.json(await prisma.fee.findMany());
};
exports.test = (req, res) => {
  res.send("Fee controller is working!");
}

exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id);

    //  Xóa toàn bộ bill liên quan
    await prisma.bill.deleteMany({
      where: { feeId: id }
    });

    //  Xóa fee
    await prisma.fee.delete({
      where: { id }
    });

    res.sendStatus(204); // Thành công
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Xóa khoản thu thất bại"
    });
  }
};
