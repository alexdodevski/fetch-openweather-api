import getCoords from "../utility/getCoords.js";
export default class Request {
  async _reguest(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async getDataOpenMap() {
    return getCoords().then((coords) => {
      return new Promise((resolve) =>
        // задержка для подгрузки координатов из getCoords ,т.к если получить их ДО таймера будет undefined
        setTimeout(() => {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=f366574461000687067bb791f7dbd2d4`;
          resolve(this._reguest(url));
        }, 200)
      );
    });
  }
}
