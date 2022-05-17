"use strict";
import App from "./modules/App.js";
import Time from "./modules/Time.js";
import Weather from "./modules/Weather.js";
import Select from "./modules/Select.js";
import changeLanguage from "./utility/changeLanguage.js";

const app = new App(document.querySelector("#app"));
app.changeLanguage = changeLanguage;
const modules = [Time, Weather, Select];
app.init(modules);
