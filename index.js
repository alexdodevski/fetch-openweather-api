"use strict";
import App from "./modules/App.js";
import Time from "./modules/Time.js";
import Weather from "./modules/Weather.js";

const app = new App(document.querySelector("#app"));
const modules = [Time, Weather];
app.init(modules);
