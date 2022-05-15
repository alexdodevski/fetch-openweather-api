export default class App {
  constructor(app) {
    this.app = app;
  }
  init(items) {
    this.childs = [];
    this.render(items);
  }

  render(elems) {
    for (let elem of elems) {
      this.app.append(new elem().render());
    }
  }
}
