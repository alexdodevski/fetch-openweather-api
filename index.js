"use strict";
import App from "./modules/App.js";
import Time from "./modules/Time.js";

const app = new App(document.querySelector("#app"));
const modules = [Time];
app.init(modules);
