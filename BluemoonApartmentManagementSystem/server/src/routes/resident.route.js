const router = require("express").Router();
const c = require("../controllers/resident.controller");

router.post("/", c.create);
router.get("/", c.getAll);
router.get("/:id", c.getById);
router.put("/:id", c.update);
router.delete("/:id", c.remove);

module.exports = router;
