const router = require("express").Router();
const c = require("../controllers/household.controller");

router.post("/", c.create);
router.get("/", c.getAll);

module.exports = router;
