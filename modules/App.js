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

  render(elems) {
    const promise = new Promise((resolve) => {
      for (let elem of elems) {
        if (elem.name === "ChangeLang") {
          this.selectLangueage = new elem();
        }
        this.childs.push(new elem().init());
      }
      resolve();
    });

    promise
      .then(() => {
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
      })
      .then(() => {
        // задержка для анимации
        setTimeout(() => {
          Array.from(this.app.children).forEach((item) => {
            item.style.opacity = 1;
          });
        }, 0);
      })
      .then(() => {
        const select = this.childs[2];
        const changeLanguage = this.selectLangueage.changeLanguage.bind(this);
        select.addEventListener("change", () => {
          let arr = [];
          for (let child of this.childs) {
            if (child.tagName === "DIV") {
              arr.push(child);
            }
          }
          changeLanguage(arr, select.children);
        });
      });
  }
}
