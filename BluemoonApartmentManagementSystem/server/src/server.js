const express = require("express");
const path = require("path");
const route = require("./routes/route");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.post("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });


// Initialize routes
route(app);

app.listen(3000, () =>
  console.log("Server running http://localhost:3000")
);
