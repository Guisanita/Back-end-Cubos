const express = require("express");
const { getProducts } = require("../controllers/products");

const routes = express();

routes.get("/produtos", getProducts);

module.exports = routes;