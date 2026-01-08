const express = require("express");
const path = require("path");
const route = require("./routes/route");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));

// app.post("/api/ping", (req, res) => {
//   res.json({ message: "pong" });
// });


// Initialize routes
route(app);

// app.get("/", (_, res) => res.send("API OK"));

app.listen(3000, () =>
  console.log("Server running http://localhost:3000")
);
