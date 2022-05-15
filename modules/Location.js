export default class Location {
  async getLocation() {
    return navigator.geolocation.getCurrentPosition(this._success, this._error);
  }
  _success({ coords }) {
    const { latitude, longitude } = coords;
    Location.latitude = latitude.toFixed(2);
    Location.longitude = longitude.toFixed(2);
  }
  _error({ message }) {
    return message;
  }
}
