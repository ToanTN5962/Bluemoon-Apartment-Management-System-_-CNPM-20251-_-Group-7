const router = require("express").Router();
const c = require("../controllers/user.controller");

router.get("/", c.getAll);
router.get("/:id", c.getById);
router.put("/:id", c.updateProfile);


module.exports = router;
