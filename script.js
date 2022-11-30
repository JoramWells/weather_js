let weather = {
  apiKey: '',
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
    )
      .then((res) => res.json())
      .then((data) => {
        this.displayWeather(data);
        console.log(data);
      });
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = 'Weather in ' + name;
    document.querySelector('.icon').src =
      'https://openweathermap.org/img/wn/' + icon + '.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = temp + '°C';

    document.querySelector('.humidity').innerText = +humidity + '%';
    document.querySelector('.wind').innerText = speed + ' km/h';
    document.querySelector('.feels_like').innerText = feels_like + '°C';
  },
  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
  },
};

document.querySelector('.search').addEventListener('keyup', function (event) {
  if (event.key == 'Enter') weather.search();
});

// weather.fetchWeather('Kitale');
