const r = require("express").Router();
const c = require("../controllers/fee.controller");
r.post("/", c.create);
r.get("/", c.getAll);
module.exports = r;