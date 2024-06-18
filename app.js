fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

function weather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=KYIV&temp=&pressure=&description=&humidity=&speed=&deg=&icon&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    //   fetch(
    //     "http://api.openweathermap.org/data/2.5/weather?q=KYIV&temp=main.temp&pressure={pressure}&description={weather[0].description}&humidity={humidity}&speed={speed}&deg={deg}&icon&units=metric&APPID=5d066958a60d315387d9492393935c19"
    //   )
    .then((res) => res.json())
    .then((data) => {
      let temp = data.main.temp;
      let pressure = data.main.pressure;
      let description = data.weather[0].description;
      let humidity = data.main.humidity;
      let speed = data.wind.speed;
      let deg = data.wind.deg;

      let img = document.querySelector(".icon");
      let icon = data.weather[0].icon;
      console.log(icon);
      //   img.setAttribute("id", icon, "width", "60px", "height", "60px");
      img.append(icon);

      let tempera = document.querySelector(".temp");
      tempera.append(temp);

      let pres = document.querySelector(".pressure");
      pres.append(pressure);

      let desc = document.querySelector(".description");
      desc.append(description);

      let hum = document.querySelector(".humidity");
      hum.append(humidity);

      let windSpeed = document.querySelector(".speed");
      windSpeed.append(speed);

      let degree = document.querySelector(".degree");
      degree.append(deg);
    });
}
document.querySelector("button").addEventListener("click", weather);
