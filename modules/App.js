export default class App {
  constructor(app) {
    this.app = app;
  }
  init(items) {
    this.childs = [];
    let waiting = document.createElement("img");
    waiting.src = `https://www.fcase.ru/catalog/view/javascript/loading.gif`;
    waiting.style.width = 50 + "px";
    waiting.style.height = 50 + "px";
    waiting.style.margin = `0 auto`;
    this.app.append(waiting);
    this.render(items);
  }

  render(elems) {
    for (let elem of elems) {
      this.childs.push(new elem().render());
    }
    setTimeout(() => {
      this.app.children[0].remove();
      this.childs.forEach((item) => this.app.append(item));
    }, 350);
  }
}
