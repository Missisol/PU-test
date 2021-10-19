console.log('Hello world!');


window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
    console.log(t.card);

    return t.card('coordinates')
    .then(function(card) {
      if (!card.coordinates) {
        // const { latitude, longitude } = card.coordinates;
        return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e12699b154eafb2ea213c8050784c38d')
        .then(res => res.json())
        .then(weatherData => {
          console.log(weatherData)
          return [{
            text: weatherData.main.temp.toString()
          }, {
            text: weatherData.wind.speed.toString()
          }
        ]
        }) 
      }
      return [];
    })
  }
});