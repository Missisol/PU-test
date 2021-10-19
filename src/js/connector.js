console.log('Hello world!');


window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
    return t.card('all')
    .then(function(card) {
      console.log(card)
      if (!card.coordinates) {
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
  },

  'board-buttons': function(t, opts) {
    return t.board('all')
    .then(function(board) {
      console.log(board)
        return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=e12699b154eafb2ea213c8050784c38d')
        .then(res => res.json())
        .then(weatherData => {
          console.log(weatherData)
          return [{
            text: 'PU-test',
            color: 'blue'
          }
        ]
        }) 
    })
  },

  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421',
      text: 'Estimate Size',
      callback: function(t){
        return t.popup({
          title: "Estimation",
          url: 'estimate.html'
        });
      }
    }];
  }
});