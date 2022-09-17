const routes = require("express").Router();
const Transactioncontroller = require("../controller/transaction.controller");

routes
  .route("/api/transaction")
  .get(Transactioncontroller.get_Transaction)
  .post(Transactioncontroller.create_Transaction)
  .delete(Transactioncontroller.delete_Transaction);

routes.route("/api/labels").get(Transactioncontroller.get_Labels);

module.exports = routes;
