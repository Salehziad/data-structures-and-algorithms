'use strict';
const Stack = require('../stack/stack');

module.exports = class PsedoQueue {
  constructor() {
    this.input = new Stack();
    this.output = new Stack();
  }
  enqueue(value) {
    this.input.push(value);
  }
  dequeue() {
    while (this.input.top) {
      this.output.push(this.input.top.value);
      return this.input.pop();
    }
  }
  isEmpty() {
    return this.input.isEmpty() && this.output.isEmpty();
  }
};
