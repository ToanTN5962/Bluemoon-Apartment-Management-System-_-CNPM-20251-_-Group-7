function route(app){
    console.log("Initializing routes...");
    console.log(process.env.JWT_SECRET);
    app.use("/api/auth", require("./auth.route"));
    app.use("/api/users", require("./user.route"));
    app.use("/api/residents", require("./resident.route"));
    app.use("/api/households", require("./household.route"));
    app.use("/api/fees", require("./fee.route"));
    app.use("/api/complaints", require("./complaint.route"));
    app.use("/api/bills", require("./bill.route"));
    //app.use("/api/payments", require("./payment.route"));
    //app.use(require("./homepage.route"));
}

module.exports = route;