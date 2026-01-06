const router = require("express").Router();
const c = require("../controllers/user.controller");

router.get("/", c.getAll);
router.get("/:id", c.getById);
router.post("/request-update", c.requestUpdateInfo);


module.exports = router;
