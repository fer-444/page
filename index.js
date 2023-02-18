let now = new Date();
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let today = document.querySelector("#date");
today.innerHTML = `${day}, ${hours}:${minutes}`;

function showTemperature(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;
  let h7 = document.querySelector("#temperature");
  h7.innerHTML = `${searchInput.main.temp}`;
}
function retriPosition(position) {
  let apiKey = "203fa770242fcd2b9555d832a88ea567";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

navigator.geolocation.getCurrentPosition(retriPosition);

let form = document.querySelector("#search-form");
form.addEventListener("submit", showTemperature);

function sayHi(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "84";
}

let fa = document.querySelector("#farenheit-link");
fa.addEventListener("click", sayHi);
function tempe(event) {
  event.preventDefault();
  let temp = document.querySelector("#temperature");
  temp.innerHTML = "29";
}

let ce = document.querySelector("#celsius-link");
ce.addEventListener("click", tempe);

function showWeather(response) {
  let h6 = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  h6.innerHTML = `${temperature}°}`;
  let h2 = document.querySelector("#temperature");
  h2.innerHTML = `${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "203fa770242fcd2b9555d832a88ea567";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

let xxbutton = document.querySelector("#xd");
xxbutton.addEventListener("click", showWeather);
