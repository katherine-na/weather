console.log("Hi");

const cities = fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
)
  .then((response) => response.json())
  .then((data) => console.log(data));
