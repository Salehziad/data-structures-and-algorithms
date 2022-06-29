'use strict';
const Node = require('./node');
module.exports = class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    (this.top === null) ? true: false;
  }
  push(value) {
    const newNode = new Node(value);
    (this.isEmpty()) ? (this.top = newNode, this.size++) : (newNode.next = this.top, this.top = newNode, this.size++);
  }
  pop() {
    (this.isEmpty()) ? console.log('no Nodes left in stack'): null;
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
  peek() {
    return (this.isEmpty()) ? 'Stack is Empty' : this.top.value;
  }
};
