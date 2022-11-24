const products = require("../data/products");

const getProducts = async (req, res) => {
    return res.status(200).json(products);
}


module.exports = {
    getProducts
}