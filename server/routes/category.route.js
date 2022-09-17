const routes = require("express").Router();
const Categorycontroller = require("../controller/category.controller");

routes
  .route("/api/categories")
  .post(Categorycontroller.create_Categories)
  .get(Categorycontroller.get_Categories);

module.exports = routes;
