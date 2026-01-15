const prisma = require("../prisma/client");
const { update } = require("./fee.controller");

// tạo bill mới
exports.create = async (req, res) => {  
  try {
    const {feeName, feeType, amount, householdIds} = req.body;

    if (!householdIds || householdIds.length === 0) {
      return res.status(400).json({
        message: "Chưa chọn phòng nào để gửi hóa đơn."
      });
    }

    const result = await prisma.$transaction(async (tx) => {
      // Tạo fee nếu chưa có
      const newFee = await tx.fee.findFirst({
        data: {
          name: feeName,
          type: feeType || "OTHER",
          amount: parseInt(amount)
        }
      });

      // Tạo bill cho từng household
      const billsData = householdIds.map((roomId) => ({
        feeId: newFee.id,
        householdId: parseInt(roomId),
        total: parseInt(amount),
        paidStatus: "UNPAID"
      }));

      await tx.bill.createMany({
        data: billsData
      });

      return newFee;
    });

    res.status(201).json({
      message: "Đã tạo hóa đơn thành công cho ${householdIds.length} phòng.",
      fee: result
    });
  } catch (err) {
    console.error("Lỗi tạo hóa đơn!", err);
    res.status(500).json({
      message: "Lỗi hệ thống, hóa đơn thất bại!"
    });
  }
};

// lấy tất cả bill
exports.getAll = async (_, res) => {
  try {
    const { householdId, status, page, pageSize } = req.query;
    const pageNum = parseInt(page) || 1;
    const sizeNum = parseInt(pageSize) || 10;
    const skip = (pageNum - 1) * sizeNum;

    let whereCondition = {};

    if (householdId) {
      whereCondition.householdId = Number(householdId);
    }

    if (status) {
      whereCondition.paidStatus = status;
    }
    
    const [total, bills] = await prisma.$transaction([
      prisma.bill.count({ where: whereCondition }),

      prisma.bill.findMany({ 
        where: whereCondition,
        include: {
          fee: true,
          household: true
        },
        orderBy: { id: 'desc' },
        skip: skip,
        take: sizeNum
      })
    ]);

    res.json({
      data: bills,
      pagination: {
        total: total,
        page: pageNum,
        pageSize: sizeNum,
        totalPages: Math.ceil(total / sizeNum)
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi hệ thống, không thể lấy hóa đơn!" });
  }
};

// test route
exports.test = (req, res) => {
  res.send("Bill controller is working!");
};

// xóa bill theo id
exports.remove = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const bill = await prisma.bill.findUnique({
      where: { id }
    });
    if (!bill) {
      return res.status(404).json({ message: "Không tìm thấy hóa đơn!" });
    }

    if (bill.paidStatus === "PAID" || bill.paidStatus === "PENDING_APPROVAL") {
      return res.status(400).json({
        message: "Không thể xóa hóa đơn đã thanh toán hoặc đang chờ duyệt khỏi CSDL."
      });
    }

    await prisma.bill.delete({ where: { id } });

    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Xóa bill thất bại" });
  }

};

exports.checkPaymentStatus = async (req, res) => {
  try {
    const { roomNumber, feeId } = req.body;

    if(!roomNumber || !feeId) {
      return res.status(400).json({ message: "Thiếu thông tin roomNumber hoặc feeId." });
    }

    const bill = await prisma.bill.findFirst({
      where: {
        household: { roomNumber: Number(roomNumber) },
        feeId: Number(feeId)
      },
      select: {
        id: true,
        paidStatus: true,
        total: true,
        household: { select: { roomNumber: true } }
      }
    });
    if (!bill) {
      return res.status(404).json({
        message: "Không tìm thấy hóa đơn cho phòng và khoản thu đã cho."
      });
    }

    res.json({
      billId: bill.id,
      status: bill.paidStatus,
      total: bill.total,
      roomNumber: bill.household.roomNumber
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi hệ thống khi kiểm tra trạng thái thanh toán." });
  }
};


exports.confirmPayment = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const bill = await prisma.bill.findUnique({
      where: { id }
    });

    if (!bill) {
      return res.status(404).json({ message: "Không tìm thấy hóa đơn!" });
    }

    if (bill.paidStatus === "PAID") {
      return res.status(400).json({ message: "Hóa đơn đã được thanh toán trước đó." });
    }

    if (bill.paidStatus === "PENDING_APPROVAL") {
      return res.status(400).json({ message: "Hóa đơn đang chờ duyệt thanh toán, không cần gửi lại." });
    }
    const updatedBill = await prisma.bill.update({
      where: { id },
      data: { paidStatus: "PENDING_APPROVAL" }
    });

    res.json({
      message: "Xác nhận thanh toán hóa đơn thành công, chờ duyệt từ quản lý.",
      bill: updatedBill
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi hệ thống khi xác nhận thanh toán." });
  }
};

exports.reviewPayment = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    if (status !== 'PAID' && status !== 'UNPAID') {
      return res.status(400).json({ message: "Trạng thái không hợp lệ." });
    }

    const result = await prisma.$transaction(async (tx) => {
      const bill = await tx.bill.update({
        where: { id },
        data: { paidStatus: status },
        include: { fee: true }
      });

      if (status === 'PAID') {
        await tx.payment.create({
          data: {
            billId: updatedBill.id,
            amount: updatedBill.total,
            method: "CASH",
            paidAt: new Date()
          }
        });
      }

      return updatedBill;
    });

    const message = status === 'PAID'
      ? "Duyệt thanh toán hóa đơn thành công."
      : "Hủy duyệt thanh toán hóa đơn thành công."; 
    
    res.json({
      message: message,
      bill: result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi hệ thống khi duyệt thanh toán." });
  }
};