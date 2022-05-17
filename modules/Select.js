export default class Select {
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

  init() {
    return this._createSelect();
  }
}
