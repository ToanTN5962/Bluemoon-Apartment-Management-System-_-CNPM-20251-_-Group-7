function route(app){
    app.use("/auth", require("./auth.route"));
    app.use("/users", require("./user.route"));
    app.use("/residents", require("./resident.route"));
    app.use("/households", require("./household.route"));
    app.use("/fees", require("./fee.route"));
}

module.exports = route;