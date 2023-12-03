function getWeather() {
    var selectedCity = document.getElementById("hdrumu").value;
    var apiKey = "b836bb8db6bd5045a1928f9b299eacda";

    if (selectedCity === "il ilçe seçin") {
        alert("Lütfen bir şehir seçin.");
        return;
    }

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=" + apiKey;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            displayWeatherGif(data);
        })
        .catch(error => {
            console.error("Hava durumu bilgisi alınamıyor: ", error);
        });
}

function displayWeather(data) {
    var weatherContainer = document.getElementById("weather-container");

    // Temizleme
    while (weatherContainer.firstChild) {
        weatherContainer.removeChild(weatherContainer.firstChild);
    }

    var cityName = document.createElement("h2");
    cityName.textContent = data.name;
    weatherContainer.appendChild(cityName);

    var weatherDesc = document.createElement("p");
    weatherDesc.textContent = "Durum: " + data.weather[0].description;
    weatherContainer.appendChild(weatherDesc);

    var temperature = document.createElement("p");
    temperature.textContent = "Sıcaklık: " + (data.main.temp - 273.15).toFixed(2) + "°C";
    weatherContainer.appendChild(temperature);

    var humidity = document.createElement("p");
    humidity.textContent = "Nem: " + data.main.humidity + "%";
    weatherContainer.appendChild(humidity);
}

function displayWeatherGif(data) {
    var gifContainer = document.getElementById("gif-container");

    // Temizleme
    while (gifContainer.firstChild) {
        gifContainer.removeChild(gifContainer.firstChild);
    }

    // Sıcaklık durumuna göre gif seçimi
    var temperature = data.main.temp - 273.15;
    var gifUrl = temperature >= 13 ? 'https://www.icegif.com/wp-content/uploads/2022/08/icegif-839.gif' : 'http://3.bp.blogspot.com/-k3LONws5bTQ/UqMvzWLUEAI/AAAAAAAADmY/HPwepxgMJSw/s1600/9f7892baf7f193343559487cc30db939.gif';
    
    var gifImg = document.createElement("img");
    gifImg.src = gifUrl;
    gifImg.alt = "Hava Durumu Gif";
    gifContainer.appendChild(gifImg);
}