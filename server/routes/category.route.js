const routes = require("express").Router();
const Categoryontroller = require("../controller/category.controller");

routes.route("/api/categories").get(Categoryontroller.create_Categories);

module.exports = routes;
