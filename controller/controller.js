const bikeProducts = require('./db.json');
let globalId = bikeProducts.reduce((maxId, bike) => Math.max(maxId, bike.id), 0) + 1;

module.exports = {
    getBikes: (req, res) => {
        res.status(200).send(bikeProducts);
    },
    createBike: (req, res) => {
        const { brand, model, type, price, image } = req.body;
        const newBike = {
            id: globalId,
            brand,
            model,
            type,
            price,
            image
        };
        bikeProducts.push(newBike);
        globalId++;
        res.status(200).send(bikeProducts);
    },
    updateBike: (req, res) => {
        const { id } = req.params;
        const { brand, model, type, price, image } = req.body;
        const index = bikeProducts.findIndex((bike) => bike.id === +id);
        if (index === -1) {
            return res.status(404).send('Bike not found');
        }
        bikeProducts[index] = {
            id: +id,
            brand,
            model,
            type,
            price,
            image
        };
        res.status(200).send(bikeProducts);
    },
    deleteBike: (req, res) => {
        const { id } = req.params;
        const index = bikeProducts.findIndex((bike) => bike.id === +id);
        if (index === -1) {
            return res.status(404).send('Bike not found');
        }
        bikeProducts.splice(index, 1);
        res.status(200).send(bikeProducts);
    }
};