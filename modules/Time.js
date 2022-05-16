import Clock from "./Clock.js";
import Currency from "./Currency.js";

export default class Time {
  constructor() {
    this.clock = new Clock().init();
    this.currency = new Currency().init();
    this.div = document.createElement("div");
  }
  init() {
    this.div.id = "time";
    this.div.append(this.clock);
    this.div.append(this.currency);
    return this.div;
  }
}
