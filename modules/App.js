export default class App {
  constructor(app) {
    this.app = app;
  }
  init(items) {
    this.childs = [];
    this._createPreLoader();
    this.render(items);
  }

  _createPreLoader() {
    let waiting = document.createElement("img");
    waiting.src = `https://www.fcase.ru/catalog/view/javascript/loading.gif`;
    waiting.style.width = 50 + "px";
    waiting.style.height = 50 + "px";
    waiting.style.margin = `0 auto`;
    this.app.append(waiting);
  }

  _animationElems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        Array.from(this.app.children).forEach((item) => {
          item.style.opacity = 1;
        });
      }, 0);
      resolve();
    });
  }

  _selectEvent() {
    const select = this.childs[2];
    select.addEventListener("change", () => {
      let elems = Array.from(this.childs).reduce((acc, child) => {
        if (child.tagName === "DIV") {
          acc.push(child);
        }
        return acc;
      }, []);

      this.changeLanguage(elems, select.children);
    });
  }

  _delayRender() {
    return new Promise((res) => {
      // задержка для полной подгрузки страницы, пока страница не подгружена, то работает прелоадер
      setTimeout(() => {
        this.app.children[0].remove();
        this.childs.forEach((item) => {
          this.app.append(item);
        });
        res();
      }, 500);
    });
  }

  render(elems) {
    const promiseRender = new Promise((resolve) => {
      for (let elem of elems) {
        this.childs.push(new elem().init());
      }
      resolve();
    });

    promiseRender
      .then(() => this._delayRender())
      .then(() => this._animationElems())
      .then(() => this._selectEvent());
  }
}
