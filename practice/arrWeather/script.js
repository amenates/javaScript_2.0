// f07be8c28ff3c0a25f9802a30823f8ab

//https://samples.openweathermap.org/data/2.5/weather
//
//
//
// ? // начало GET запроса
// q=London,uk
// &
// appid=439d4b804bc8187953eb36d2a8c26a02

fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
        //document.querySelector('.features').textContent = data.wind.speed;
        // https://openweathermap.org/img/wn/01d@2x.png
        document.querySelector('.features li').innerHTML = `${<img src="https://openweathermap.org/img/wn/01d"} ${data.weather[0]['icon']} ${@2x.png>}`;
    })
    .catch(function () {
        // catch any errors
    });