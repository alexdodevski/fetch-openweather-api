import Request from "./Request.js";

export default class Weather extends Request {
  _createWeather() {
    const div = document.createElement("div");
    div.id = "weather";
    this.weather = div;
  }
  _createIcon(icon) {
    let img = document.createElement("img");
    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    img.classList.add("weather_icon");
    this.weather.append(img);
  }
  _createDegrees(degrees) {
    let h3 = document.createElement("h3");
    h3.classList.add("weather_degrees");
    h3.textContent = `${+degrees > 0 ? "+" : "-"}${
      Math.round(+degrees.toFixed(2)) - 273
    }°`;
    this.weather.append(h3);
  }
  _createText(text, className) {
    let p = document.createElement("p");
    p.classList.add(`weather_${className}`);
    p.textContent = text;
    this.weather.append(p);
  }
  _getWeather() {
    this.getLocation()
      .then((data) => {
        console.log(data.weather[0]);
        const weather = data.weather[0];
        const weatherData = {
          temp: data.main.temp,
          icon: weather.icon,
          word: weather.main,
          description: weather.description,
        };
        return weatherData;
      })
      .then((data) => {
        this._createIcon(data.icon);
        this._createDegrees(data.temp);
        this._createText(data.word, "word");
        this._createText(data.description, "description");
      });
  }
  render() {
    this._createWeather();
    this._getWeather();
    return this.weather;
  }
}
