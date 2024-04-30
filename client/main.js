const mountainBikeContainer = document.querySelector('#mountain-bike-container');
const trailsContainer = document.querySelector('#trails-container');
const dealerContainer = document.querySelector('#dealer-container');

const baseURL = '/api/bikeProducts';


const getBikesButton = document.querySelector('#get-bikes');

// Add a click event listener to the "Get Bikes" button
getBikesButton.addEventListener('click', function() {
    // Fetch the bike data from db.json
    fetch('../db.json')
        .then(response => response.json())
        .then(data => {
            const bikes = data.bikes;
            const dealers = data.dealers;
            const trails = data.trails;
            // Create a select element
            const select = document.createElement('select');

            // Populate the select element with the bike data
            data.bikes.forEach(bike => {
                const option = document.createElement('option');
                option.value = bike.id;
                option.textContent = bike.name;
                select.appendChild(option);
            });

            // Append the select element to the bikes container
            const bikesContainer = document.querySelector('#bikes-container');
            bikesContainer.appendChild(select);
        })
        .catch(error => console.error('Error:', error));
});

const bikesCallBack = ({data: bikeProducts}) => displayBikes(bikeProducts);
const errCallBack = (err) => console.log(err);

const getAllBikes = () => axios.get(baseURL).then(bikesCallBack).catch(errCallBack);
const createBike = (body) => axios.post(baseURL, body).then(bikesCallBack).catch(errCallBack);
const updateBike = (id, type) => axios.put(`${baseURL}/${id}`, type).then(bikesCallBack).catch(errCallBack);
const deleteBike = (id) => axios.delete(`${baseURL}/${id}`).then(bikesCallBack).catch(errCallBack);

function submithandler(event) {
    event.preventDefault();

    let brand = document.querySelector('#brand');
    let model = document.querySelector('#model');
    let type = document.querySelector('#type');
    let price = document.querySelector('#price');
    let image = document.querySelector('#image');

    let bodyobj = {
        brand: brand.value,
        model: model.value,
        type: type.value,
        price: price.value,
        image: image.value
    };

    createBike(bodyobj);

    brand.value = '';
    model.value = '';
    type.value = '';
    price.value = '';
    image.value = '';
}

getAllBikes()