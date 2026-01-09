const prisma = require("../prisma/client");

// tạo bill mới
exports.create = async (req, res) => {
  res.json(await prisma.bill.create({ data: req.body }));
};

// lấy tất cả bill
exports.getAll = async (_, res) => {
  res.json(
    await prisma.bill.findMany({
      include: {
        payment: true,
        fee: true,
        household: true,
      },
    })
  );
};

// test route
exports.test = (req, res) => {
  res.send("Bill controller is working!");
};

// xóa bill theo id
exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.bill.delete({
      where: { id },
    });

    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Xóa bill thất bại" });
  }
};

// cập nhật trạng thái thanh toán
exports.update = async (req, res) => {
  try {
    const bill = await prisma.bill.update({
      where: { id: Number(req.params.id) },
      data: {
        paidStatus: req.body.paidStatus,
        total: req.body.total,
      },
    });

    res.json(bill);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Update bill failed" });
  }
};

exports.checkPaymentStatus = async (req, res) => {
  const { roomNumber, feeId } = req.query;

  // 1. tìm bill thông qua quan hệ
  const bill = await prisma.bill.findFirst({
    where: {
      feeId: Number(feeId),
      household: {
        roomNumber: Number(roomNumber)
      }
    },
    select: {
      paidStatus: true,
      total: true
    }
  });

  if (!bill) {
    return res.status(404).json({
      message: "Không tìm thấy hóa đơn"
    });
  }

  res.json({
    roomNumber,
    status: bill.paidStatus,
    total: bill.total
  });
};
