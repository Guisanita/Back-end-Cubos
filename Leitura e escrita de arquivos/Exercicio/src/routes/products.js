const express = require("express");
const { getProducts, sale } = require("../controllers/products");

const routes = express();

routes.get("/produtos", getProducts);
routes.post("/produtos", sale);

module.exports = routes;