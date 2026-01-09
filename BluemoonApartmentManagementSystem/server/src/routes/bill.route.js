const router = require("express").Router();
const c = require("../controllers/bill.controller");

router.post("/", c.create);          // tạo bill
router.get("/showbills", c.getAll);  // lấy danh sách bill
router.get("/", c.test);             // test
router.delete("/:id", c.remove);     // xóa bill
router.put("/:id", c.update);        // cập nhật bill
router.get("/payment-status", c.checkPaymentStatus);


module.exports = router;
