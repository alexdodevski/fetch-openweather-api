import Location from "./Location.js";
export default class Request {
  async getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
  async getLocation() {
    let location = new Location();
    return location.getCoords().then(() => {
      return new Promise((resolve) =>
        setTimeout(() => {
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=f366574461000687067bb791f7dbd2d4`;
          resolve(this.getData(url));
        }, 0)
      );
    });
  }
}
