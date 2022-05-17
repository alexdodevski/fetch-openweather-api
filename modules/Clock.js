import Request from "./Request.js";

export default class Clock extends Request {
  _createClock() {
    this.clock = document.createElement("div");
    this.clockOutput = document.createElement("h1");
    this.clockOutput.classList.add("clock_output");
    this.clock.id = "clock_date";
    this.clock.append(this.clockOutput);
  }
  _changeTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    this.clockOutput.innerHTML = `${hours === 0 ? `0${hours}` : `${hours}`}:${
      minutes < 10 ? `0${minutes}` : `${minutes}`
    }:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
  }
  _createGeoAndDate() {
    this.getDataOpenMap()
      .then(({ name }) => this._appendCity(name))
      .then(() => this._createCurrentDate())
      .then(() => this._changeTime())
      .catch((err) => console.log(err));
  }

  _appendCity(city) {
    const h3 = document.createElement("h3");
    h3.textContent = city;
    h3.classList.add("clock_city");
    h3.setAttribute("data-translate", "city");
    this.clock.append(h3);
  }
  _createCurrentDate() {
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
    this._createClock();
    this._createGeoAndDate();
    setInterval(() => {
      this._changeTime();
    }, 1000);
    return this.clock;
  }
}
