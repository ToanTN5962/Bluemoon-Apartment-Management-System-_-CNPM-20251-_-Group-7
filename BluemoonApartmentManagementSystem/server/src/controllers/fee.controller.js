const prisma = require("../prisma/client");
// tạo bản ghi fee mới và lưu nó trong database
exports.create = async (req, res) => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. tạo fee
      const fee = await tx.fee.create({
        data: {
          name: req.body.name,
          amount: req.body.amount,
          cycle: req.body.cycle
        }
      });

      // 2. lấy tất cả household
      const households = await tx.household.findMany({
        select: { id: true }
      });

      // 3. tạo bill cho mỗi household
      const bills = households.map(h => ({
        feeId: fee.id,
        householdId: h.id,
        total: req.body.amount,
        paidStatus: "UNPAID"
      }));

      await tx.bill.createMany({
        data: bills
      });

      return fee;
    });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Tạo khoản thu thất bại"
    });
  }
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

exports.update = async (req, res) => {
  try {
    const fee = await prisma.fee.update({
      where: { id: Number(req.params.id) },
      data: {
        name: req.body.name,
        amount: req.body.amount,
        cycle: req.body.cycle,
      },
    });

    res.json(fee);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Update failed" });
  }
};
