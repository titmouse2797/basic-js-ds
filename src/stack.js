const { NotImplementedError } = require('../extensions/index.js');


class Stack {
  constructor(){
    this.way = [];
  }

  push(element) {
    this.way.push(element);
  }

  pop() {
    return this.way.pop();
  }

  peek() {
    return this.way[this.way.length-1]
  }
}
module.exports = {
  Stack
};
