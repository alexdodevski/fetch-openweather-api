import { translateOnRus, translateOnEng } from "../utility/translations.js";

export default function changeLanguage(elems, options) {
  const lang = Array.from(options).find((item) => item.selected).label;
  const translateWords = lang === "RU" ? translateOnRus : translateOnEng;
  for (let elem of elems) {
    const translateElems = elem.querySelectorAll("[data-translate]");
    translateElems.forEach((item) => {
      const textKey = item.textContent;
      const textObject = translateWords[item.getAttribute("data-translate")];
      item.textContent = textObject[textKey];
    });
  }
}
