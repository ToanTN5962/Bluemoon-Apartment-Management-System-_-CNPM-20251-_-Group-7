const router = require("express").Router();
const homepage = require("../controllers/homepage.controller")

router.get("/", homepage.getHomepage);

module.exports = router;