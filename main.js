const temperature = document.querySelector("#temperature")
const wheaterDescription = document.querySelector("wheater-description")
const wheaterCountry = document.querySelector("wheater-country")

const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"

fetch(apiKey)

console.log(fetch);

