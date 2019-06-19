class Weather {
  constructor(city, state) {
    this.apiKey = '5798927406bfb64694f0dd29148365e4';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.state
      }&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
