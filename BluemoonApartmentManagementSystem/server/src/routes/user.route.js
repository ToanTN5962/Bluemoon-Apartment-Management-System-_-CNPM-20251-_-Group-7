const router = require("express").Router();
const c = require("../controllers/user.controller");

router.get("/search", c.search);
router.get("/", c.getAll);
router.get("/:id", c.getById);
router.post("/request-update", c.requestUpdateInfo);
router.patch('/activate/:id', c.activateUser);

module.exports = router;
