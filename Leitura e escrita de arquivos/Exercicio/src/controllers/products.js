const products = require("../data/products");
const fs = require("fs/promises");

const getProducts = async (req, res) => {
    return res.status(200).json(products);
}

const sale = async (req, res) => {
    const { product_id, quantity } = req.body;

    if (!product_id || !quantity) {
        return res.status(404).json({ "mensagem": "Favor inserir product_id e quantity" });
    }

    const foundProduct = products.find((product) => {
        return product.id === Number(product_id);
    })

    if (!foundProduct) {
        return res.status(404).json({ "mensagem": "Produto não encontrado" });
    }

    try {

        const salesJson = await fs.readFile("./src/json/sales.json");

        const sales = JSON.parse(salesJson);

        sales.sales.push({
            "product": {
                "id": product_id,
                "name": foundProduct.name,
                "value": foundProduct.value
            },

            "quantity": quantity
        })

        const saleJson = JSON.stringify(sales);

        await fs.writeFile("./src/json/sales.json", saleJson);

        return res.status(200).json('Venda cadastrada com sucesso.');

    } catch (error) {
        // console.log(error);
        // console.log(sales)
        return res.json(error.message);
    }

}

module.exports = {
    getProducts,
    sale
}