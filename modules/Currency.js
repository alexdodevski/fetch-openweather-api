export default class Currency {
  constructor() {
    this.url = `https://www.cbr-xml-daily.ru/daily_json.js`;
    this.currencies = [];
  }
  async _getUsd() {
    let response = await fetch(this.url);
    let valutes = await response.json();
    this.currencies.push({
      class: "$",
      value: valutes["Valute"]["USD"][`Value`].toFixed(1) + 0,
    });
  }
  async _getEuro() {
    let response = await fetch(this.url);
    let valutes = await response.json();
    this.currencies.push({
      class: "€",
      value: valutes["Valute"]["EUR"][`Value`].toFixed(1) + 0,
    });
  }

  _createCurrency() {
    const div = document.createElement("div");
    div.id = "currencies";

    this._getEuro().then(() => {
      let p = document.createElement("p");
      p.innerHTML = `<span>${this.currencies[0].class}</span>${this.currencies[0].value}`;
      div.append(p);
    });

    this._getUsd().then(() => {
      let p = document.createElement("p");
      p.innerHTML = `<span>${this.currencies[1].class}</span>${this.currencies[1].value}`;
      div.append(p);
    });

    return div;
  }
  init() {
    return this._createCurrency();
  }
}
