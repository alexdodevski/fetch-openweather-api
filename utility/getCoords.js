export default async function getCoords() {
  return new Promise((resolve) => {
    let url;
    navigator.geolocation.getCurrentPosition(success, error);

    function success({ coords }) {
      const { latitude, longitude } = coords;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude.toFixed(
        2
      )}&lon=${longitude.toFixed(2)}&appid=f366574461000687067bb791f7dbd2d4`;
    }

    function error({ message }) {
      console.log(message);
    }

    resolve(url);
  });
}
