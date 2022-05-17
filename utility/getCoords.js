export default async function getCoords() {
  return new Promise((resolve) => {
    let result = {};
    navigator.geolocation.getCurrentPosition(success, error);

    function success({ coords }) {
      const { latitude, longitude } = coords;
      result.latitude = latitude.toFixed(2);
      result.longitude = longitude.toFixed(2);
    }

    function error({ message }) {
      console.log(message);
    }

    resolve(result);
  });
}
