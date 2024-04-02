// I used OPEN-METEO API
// https://open-meteo.com/en/docs#latitude=51.0501&longitude=-114.0853&hourly=temperature_2m

const latitude = 51.0447;
const longitude = -114.0719;

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.current_weather.temperature;
        const weathercode = data.current_weather.weathercode;

        const weatherDescriptions = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast"
        };

        const description = weatherDescriptions[weathercode] || "Weather description unavailable";

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
        document.getElementById('description').textContent = `Current condition: ${description}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
