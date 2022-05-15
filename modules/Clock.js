import Location from "./Location.js";

export default class Clock {
  _createTime() {
    this.clock = document.createElement("div");
    this.clockOutput = document.createElement("h1");
    this.clockOutput.classList.add("clock_output");
    this.clock.id = "time_date";
    this.clock.append(this.clockOutput);
  }
  _changeTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.clockOutput.innerHTML = `${hours}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  }
  _createLocation() {
    let location = new Location();
    location
      .getLocation()
      .then(() => {
        return new Promise((resolve) =>
          setTimeout(() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=f366574461000687067bb791f7dbd2d4`;
            resolve(fetch(url));
          }, 0)
        );
      })
      .then((data) => data.json())
      .then(({ name }) => this._appendTimezone(name))
      .then(() => this._crateCurrentDate())
      .catch((err) => console.log(err));
  }

  _appendTimezone(city) {
    const h3 = document.createElement("h3");
    h3.textContent = city;
    h3.classList.add("clock_timezone");
    this.clock.append(h3);
  }
  _crateCurrentDate() {
    const h3 = document.createElement("h3");
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    const mounth = date.getMonth() + 1;
    h3.textContent = `${day < 10 ? `0${day}` : `${day}`}.${
      mounth < 10 ? `0${mounth}` : `${mounth}`
    }.${year}`;
    h3.classList.add("clock_date");
    this.clock.append(h3);
  }
  init() {
    this._createLocation();
    this._createTime();
    this._changeTime();
    setInterval(() => {
      this._changeTime();
    }, 1000);
    return this.clock;
  }
}
