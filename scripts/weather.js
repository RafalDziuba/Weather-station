const input = document.querySelector('input');
const button = document.querySelector('button');
const temp = document.querySelector('#temp');
const hum = document.querySelector('#hum');
const cityDisplay = document.querySelector('h1');
const photo = document.querySelector('.weather-img-content');
const warning = document.querySelector('.warning');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=5ca86fca9273aa6d55aafedb608e2b5a';
const API_UNITS = '&units=metric';

const getWeather = () => {
  const city = input.value;
  const URL = API_LINK + city + API_KEY + API_UNITS;

  axios
    .get(URL)
    .then((res) => {
      const status = Object.assign({}, ...res.data.weather);
      cityDisplay.textContent = res.data.name;
      temp.textContent = res.data.main.temp.toFixed(1) + '°C';
      hum.textContent = res.data.main.humidity + '%';

      input.value = '';
      warning.textContent = '';

      if (status.id <= 232) {
        photo.setAttribute('src', './images/thunderstorm.png');
      } else if (status.id >= 300 && status.id <= 321) {
        photo.setAttribute('src', './images/drizzle.png');
      } else if (status.id >= 500 && status.id <= 531) {
        photo.setAttribute('src', './images/rain.png');
      } else if (status.id >= 600 && status.id <= 622) {
        photo.setAttribute('src', './images/ice.png');
      } else if (status.id >= 700 && status.id <= 781) {
        photo.setAttribute('src', './images/fog.png');
      } else if (status.id == 800) {
        photo.setAttribute('src', './images/sun.png');
      } else if (status.id >= 801 && status.id <= 804) {
        photo.setAttribute('src', '../images/cloud.png');
      } else {
        photo.setAttribute('src', '.images/unknown.png');
      }
    })
    .catch(() => (warning.textContent = 'Error!'));
};

button.addEventListener('click', getWeather);
