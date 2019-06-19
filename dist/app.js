// Init Storgae
const storage = new Storage();

// get data from LS
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Init  UI object
const ui = new UI();
function getWeather() {
  weather
    .getWeather()
    .then(result => {
      ui.paint(result);
    })
    .catch(err => console.log(err));
}

// change Location from Model
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // change location
  weather.changeLocation(city, state);
  // set location in lS
  storage.setLocationData(city, state);
  // get and Display Weather
  getWeather();
  // close Model
  $('#locModal').modal('hide');
});
