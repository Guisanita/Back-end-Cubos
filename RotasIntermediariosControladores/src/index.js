const express = require("express");
const { showCars, foundCar } = require("./controllers/cars");
const password = require("./middlewares/cars");
const app = express();

app.use(password);

app.get("/cars", showCars);
app.get("/cars/:id", foundCar);


app.listen(3000);