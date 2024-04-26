const bikeContainer = document.querySelector('.bike-container');

const baseURL = '/api/bikeProducts';

onst mountainBikesLink = document.querySelector('.navbar a[href="Mountain Bike"]');

// Add an event listener for the click event
mountainBikesLink.addEventListener('click', function(event) {
    // Prevent the default link click behavior
    event.preventDefault();

    // Fetch the data from the server
    fetch('/api/bikeProducts')
        .then(response => response.json())
        .then(data => {
            // Clear the bike-container
            const bikeContainer = document.getElementById('bike-container');
            bikeContainer.innerHTML = '';

            // Loop through the data and add each bike to the bike-container
            data.forEach(bike => {
                const bikeElement = document.createElement('div');
                bikeElement.textContent = bike.name; // Replace 'name' with the actual property name in your JSON data
                bikeContainer.appendChild(bikeElement);
            });
        });
});