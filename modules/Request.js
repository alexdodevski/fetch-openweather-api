export default class Request {
  async _reguest(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async getDataOpenMap() {
    return new Promise((resolve) => {
      // задержка для подгрузки координатов из getCoords ,т.к если получить их ДО таймера будет undefined
      let url;
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        let { latitude, longitude } = coords;
        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f366574461000687067bb791f7dbd2d4`;
      });

      setTimeout(() => {
        console.log(url);
        resolve(this._reguest(url));
      }, 0);
    });
  }
}
