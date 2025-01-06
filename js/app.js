// Create a new instance of the Storage class
const storage = new Storage();

// Get the stored location data (city and state)
const weatherLoc = storage.getLocationData();

// Get the button element for changing the location
const btn = document.getElementById('w-change-btn');

// Get the input fields for city and state
const inPutState = document.getElementById('state');
const inputCity = document.getElementById('city');

// Create a new instance of the Weather class with the city and state
const weather = new Weather(weatherLoc.city, weatherLoc.state);

// Create a new instance of the UI class
const ui = new UI();

// Function to fetch and display weather data
function getData(){
    weather.getlocation()
        .then(result => { 
            console.log(result);
            // Use the UI class to paint the weather data on the webpage
            ui.paint(result);
        })
        .catch(err => console.log(err));
}

// Function to change the location and update the weather data
function changeLoc(){
    // Change the location in the Weather class with new input values
    weather.changeLocation(inputCity.value, inPutState.value);
    
    // Fetch and display weather data for the new location
    getData();

    // Save the new location data to storage
    storage.setlocationData(inputCity.value, inPutState.value);

    // Hide the location modal
    $('#locationModal').modal('hide');
}

// Event listener for when the DOM content is fully loaded to fetch data
document.addEventListener("DOMContentLoaded", getData);

// Event listener for the button to change location
btn.addEventListener('click', changeLoc);
