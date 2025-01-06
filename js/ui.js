class UI {
    // Constructor of the UI class (no parameters needed for this example)
    constructor() {
    }

    // Method to display weather data on the webpage
    paint(result) {
        // Extract and store weather data from the result
        this.name = result.name;
        this.country = result.sys.country;
        this.lat = result.coord.lat;
        this.lon = result.coord.lon;
        this.speed = result.wind.speed;
        this.maxTemp = result.main.temp_max;
        this.minTemp = result.main.temp_min;
        this.temp = result.main.temp;
        this.humidity = result.main.humidity;
        this.pressure = result.main.pressure;
        this.main = result.weather[0].main;
        this.iconId = result.weather[0].icon;

        // Display the extracted weather data on the webpage
        document.getElementById('w-location').textContent = this.name + ' / ' + this.country;
        document.getElementById('w-temp').textContent = this.temp;
        document.getElementById('w-humidity').textContent = this.humidity;
        document.getElementById('w-pressure').textContent = this.pressure;
        document.getElementById('w-wind_speed').textContent = this.speed;
        document.getElementById('w-temp_max').textContent = this.maxTemp;
        document.getElementById('w-temp_min').textContent = this.minTemp;
        document.getElementById('w-lat').textContent = this.lat;
        document.getElementById('w-lon').textContent = this.lon;
        document.getElementById('w-main').textContent = this.main;
        
        // Set the icon for the weather condition
        document.getElementById('w-icon').setAttribute('src', `https://openweathermap.org/img/wn/${this.iconId}@2x.png`);
    }
}
