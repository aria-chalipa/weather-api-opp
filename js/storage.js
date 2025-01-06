class Storage {
    // Constructor to initialize the default city, state, and country
    constructor() {
        this.city;
        this.defaultCity = 'تهران'; // Default city (Tehran in Persian)
        this.country = 'IR'; // Default country code (Iran)
        this.defaultstate = 'تهران'; // Default state (Tehran in Persian)
        this.state;
    }

    // Method to get the stored location data (city and state)
    getLocationData() {
        // Check if 'city' is stored in local storage; if not, use the default city
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        // Check if 'state' is stored in local storage; if not, use the default state
        if (localStorage.getItem('state') === null) {
            this.state = this.defaultstate;
        } else {
            this.state = localStorage.getItem('state');
        }

        // Return an object containing the city and state
        return {
            city: this.city,
            state: this.state
        };
    }

    // Method to set the location data (city and state) in local storage
    setlocationData(city, state) {
        localStorage.setItem('city', city); // Store the city in local storage
        localStorage.setItem('state', state); // Store the state in local storage
    }
}
