const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/auth.route"));
app.use("/users", require("./routes/user.route"));
app.use("/residents", require("./routes/resident.route"));
app.use("/households", require("./routes/household.route"));
app.use("/fees", require("./routes/fee.route"));
app.use("/bills", require("./routes/bill.route"));
app.use("/payments", require("./routes/payment.route"));

app.get("/", (_, res) => res.send("API OK 🚀"));

app.listen(3000, () =>
  console.log("Server running http://localhost:3000")
);
