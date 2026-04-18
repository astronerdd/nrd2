function getWeather() {

    let city = document.getElementById("city").value;
    let result = document.getElementById("result");

    let apiKey = "YOUR_API_KEY"; // replace this

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => {

        if (data.cod === "404") {
            result.innerText = "City not found";
            return;
        }

        let temp = data.main.temp;
        let weather = data.weather[0].main;

        result.innerText = `Temp: ${temp}°C, ${weather}`;
    });
}