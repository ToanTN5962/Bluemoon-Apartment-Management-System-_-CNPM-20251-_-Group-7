const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const route = require("./routes/route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize routes
route(app);

// app.get("/", (_, res) => res.send("API OK 🚀"));

app.listen(3000, () =>
  console.log("Server running http://localhost:3000")
);
