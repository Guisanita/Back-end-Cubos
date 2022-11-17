const cars = require("../bancodedados");

const showCars = (req, res) => {
    const { marca, cor } = req.query;
    let result = cars;

    if (marca) {
        result = result.filter((car) => {
            return car.marca === marca;
        });
    }

    if (cor) {
        result = result.filter((car) => {
            return car.cor === cor;
        });
    }

    res.send(result);
}

const foundCar = (req, res) => {
    const { id } = req.params;

    const foundedCar = cars.find((car) => {
        return car.id === Number(id);
    })

    res.send(foundedCar);

}

module.exports = {
    showCars,
    foundCar
}






