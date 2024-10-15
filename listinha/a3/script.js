const apiKey = '18b760d86a5e86358a47f587215d3312'; 
const button = document.getElementById('getWeatherButton');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

button.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Por favor, digite uma cidade.');
    }
});

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Cidade não encontrada');
        }
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>Temperatura: ${temperature}°C</p>
        <p>Condições: ${description}</p>
    `;
}

// eu simplesmente nao sei oq ta acntecendo...............
