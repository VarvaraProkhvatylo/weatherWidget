fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
  .then((res) => res.json())
  .then((data) => console.log(data));

function weather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=KYIV&units=metric&APPID=5d066958a60d315387d9492393935c19"
  )
    .then((res) => res.json())
    .then((data) => {
      //   let info = document.createElement("div");
      let temp = data.main.temp;
      let pressure = data.main.pressure;
      let description = data.weather[0].description;
      let humidity = data.main.humidity;
      let speed = data.wind.speed;
      let deg = data.wind.deg;
      let icon = data.weather[0].icon;

      let img = document.body.img;

      //   img.setAttribute("src", icon);

      //   info.setAttribute("pressure", pressure);

      document.body.append(icon);
    });
}
document.querySelector("button").addEventListener("click", weather);
