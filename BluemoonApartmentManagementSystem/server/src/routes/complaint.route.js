const router = require("express").Router();
const c = require("../controllers/complaint.controller");
const authMiddleware = require("../middleware/auth");

router.post("/createcomplaint", authMiddleware, c.createcomplaint);
router.get("/getall", c.getAllComplaints);
// route.get("/:id", c.getComplaintById);
// route.put("/:id", c.updateComplaintStatus);

module.exports = router;