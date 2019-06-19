class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.temp_min = document.getElementById('w-temp_min');
    this.temp_max = document.getElementById('w-temp_max');
    this.wind = document.getElementById('w-wind');
  }

  paint(result) {
    this.location.textContent = `${result.name}, ${result.sys.country} `;
    this.desc.textContent = result.weather[0].main;
    this.string.textContent = `${(result.main.temp - 273.15).toFixed(1)} °C, ${(
      (result.main.temp - 273.5) * 1.8 +
      32
    ).toFixed(1)} °F`;
    this.icon.setAttribute(
      'src',
      `https://openweathermap.org/img/w/${result.weather[0].icon}.png`
    );
    this.humidity.textContent = `Relative Humidity : ${result.main.humidity}`;
    this.temp_min.textContent = `Max Temp : ${(
      result.main.temp_max - 273.5
    ).toFixed(1)} °C`;
    this.temp_max.textContent = `Min Temp : ${(
      result.main.temp_min - 273.5
    ).toFixed(1)} °C`;
    this.wind.textContent = `Wind : ${result.wind.speed} km/h, ${
      result.wind.deg
    } °Deg`;
  }
}

// console.log(result.name);
//     console.log(result.sys.country);
//     console.log(result.weather[0].main);
//     console.log((result.main.temp - 273.15).toFixed(2));
//     console.log(result.weather[0].icon);
//     console.log(result.main.humidity);
//     console.log(result.main.temp_min);
//     console.log(result.main.temp_max);
//     console.log(result.wind.speed);
//     console.log(result.wind.deg);
// 306.5K − 273.15) × 9/5 + 32
