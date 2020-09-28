class DomElement {
  constructor() {
    this.innerText = '';
    this.value = '';
  }

  addEventListener(event, fn) {
    this[event] = (callback) => {
      fn().then(callback);
    };
  }
}