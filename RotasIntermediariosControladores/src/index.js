const express = require("express");
const { showCars, foundCar } = require("./controllers/cars");
const app = express();

app.get("/cars", showCars);
app.get("/cars/:id", foundCar);


app.listen(3000);