class Weather {
    // Constructor to initialize the city, state, country, and API key
    constructor(city, state) {
        this.country = 'IR'; // Default country code (Iran)
        this.APIkey = 'e613dc6d789c9bd086eeabf83612227c'; // API key for OpenWeatherMap
        this.state = state; // State provided during instantiation
        this.city = city; // City provided during instantiation
    }

    // Method to fetch weather data for the current city and state
    async getlocation() {
        // Fetch weather data from the OpenWeatherMap API using city, state, and country
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state},${this.country}&appid=${this.APIkey}`);
        
        // Check if the response is okay (status 200-299)
        if(response.ok) {
            const data = await response.json(); // Parse JSON data from the response
            return data; // Return the parsed data
        } else {
            throw new Error('Failed to fetch data'); // Throw an error if the fetch fails
        }
    }

    // Method to change the location (city and state)
    changeLocation(city, state) {
        this.city = city; // Update the city
        this.state = state; // Update the state
    }
}
