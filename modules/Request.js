import Location from "./Location.js";
export default class Request {
  async _reguest(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async getData() {
    let location = new Location();
    return location.getCoords().then(() => {
      return new Promise((resolve) =>
        // задержка для подгрузки координатов из Location. и получения их в таймере для актуальности , т.к если получить их ДО таймера будет undefined
        setTimeout(() => {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=f366574461000687067bb791f7dbd2d4`;
          resolve(this._reguest(url));
        }, 0)
      );
    });
  }
}
