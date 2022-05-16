import { translateRus, translateEng } from "../utility/translations.js";

export default class ChangeLang {
  _createSelect() {
    const select = document.createElement("select");
    select.classList.add("change_lang");
    const languages = ["en", "ru"];
    for (let lang of languages) {
      let option = this._createOption(lang);
      select.append(option);
    }
    return select;
  }
  _createOption(lang) {
    const option = document.createElement("option");
    option.textContent = lang.toUpperCase();
    if (lang === "en") {
      option.selected = true;
    }

    return option;
  }

  changeLanguage(elems, options) {
    function changeLangWeather(elem, lang) {
      if (lang === "RU") {
        for (let child of elem.children) {
          if (child.classList.contains("weather_word")) {
            let currentText =
              translateRus.text[child.textContent.toLowerCase()];
            child.textContent = currentText;
          } else if (child.classList.contains("weather_description")) {
            let currentText =
              translateRus.description[child.textContent.toLowerCase()];

            child.textContent = currentText;
          }
        }
      } else if (lang === "EN") {
        for (let child of elem.children) {
          if (child.classList.contains("weather_word")) {
            let currentText =
              translateEng.text[child.textContent.toLowerCase()];
            child.textContent = currentText;
          } else if (child.classList.contains("weather_description")) {
            let currentText =
              translateEng.description[child.textContent.toLowerCase()];

            child.textContent = currentText;
          }
        }
      }
    }
    function changeLangTime(elem, lang) {
      if (lang === "RU") {
        const elems = elem.children[0].children;
        for (let child of elems) {
          if (child.classList.contains("clock_timezone")) {
            let currentText = translateRus.city[child.textContent];
            child.textContent = currentText;
          }
        }
      } else if (lang === "EN") {
        const elems = elem.children[0].children;
        for (let child of elems) {
          if (child.classList.contains("clock_timezone")) {
            let currentText = translateEng.city[child.textContent];
            child.textContent = currentText;
          }
        }
      }
    }

    elems.forEach((elem) => {
      let label;
      for (let option of options) {
        if (option.selected) {
          label = option.label;
        }
      }

      if (elem.id === "weather") {
        changeLangWeather(elem, label);
      } else if (elem.id === "time") {
        changeLangTime(elem, label);
      }
    });
  }

  init() {
    return this._createSelect();
  }
}
