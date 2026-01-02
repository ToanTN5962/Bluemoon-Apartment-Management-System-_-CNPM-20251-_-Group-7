const router = require("express").Router();
const c = require("../controllers/fee.controller");
router.post("/", c.create);
router.get("/showfees", c.getAll);
router.get("/", c.test);
module.exports = router;