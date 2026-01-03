const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const route = require("./routes/route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize routes
route(app);

// app.get("/", (_, res) => res.send("API OK"));

app.listen(3000, () =>
  console.log("Server running http://localhost:3000")
);
