fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

function weather() {
  // fetch(
  //   "http://api.openweathermap.org/data/2.5/weather?q=KYIV&temp=&pressure=&description=&humidity=&speed=&deg=&icon&units=metric&APPID=5d066958a60d315387d9492393935c19"
  // )
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=&temp=&pressure=&description=&humidity=&speed=&deg=&icon&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((res) => res.json())
    .then((data) => {
      let el = document.querySelector(".city");
      let q = el.dataset.city;

      let temp = data.main.temp + " C";
      let pressure = data.main.pressure + " hPa";
      let description = data.weather[0].description;
      let humidity = data.main.humidity + " %";
      let speed = data.wind.speed + " m/s";
      let deg = data.wind.deg + " degrees";

      let img = document.querySelector(".icon img");
      let icon = data.weather[0].icon;
      img.setAttribute("src", `https://openweathermap.org/img/w/${icon}.png`);
      img.append(icon);

      let tempera = document.querySelector(".temp");
      tempera.prepend(temp);

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
// let kyivBtn = document.body.querySelector(".kyiv");
// console.log(kyivBtn);

// document.querySelector(".kyiv").addEventListener("click", weather);

/// try to add Kyiv not default
// document
//   .querySelector(".kyiv")
//   .addEventListener("click", weather((city = "KYIV")));

// document
//   .querySelector(".london")
//   .addEventListener("click", weather((q.dataset.city = "LONDON")));

document.querySelector(".city").addEventListener("click", weather);
