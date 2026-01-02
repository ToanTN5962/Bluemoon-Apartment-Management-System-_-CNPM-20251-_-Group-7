function route(app){
    app.use("/auth", require("./auth.route"));
    app.use("/users", require("./user.route"));
    app.use("/residents", require("./resident.route"));
    app.use("/households", require("./household.route"));
    app.use("/fees", require("./fee.route"));
    //app.use("/bills", require("./bill.route"));
    //app.use("/payments", require("./payment.route"));
    app.use(require("./homepage.route"));
}

module.exports = route;