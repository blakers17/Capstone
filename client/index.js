const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const {
    getBikes,
    createBike,
    updateBike,
    deleteBike
    } = require('./controller.js');


app.get('/api/bikeProducts', getBikes);
app.post('/api/bikeProducts', createBike);
app.put('/api/bikeProducts/:id', updateBike);
app.delete('/api/bikeProducts/:id', deleteBike);

app.listen(4000, () => console.log('Server is running on port 4000'));
