
const controller = require("../controller/logic/user.controller");

module.exports = (app) => {
    app.get("/user", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.pos("/user", (req, res, next) => {
        controller.login(req, res, next);
    });
};