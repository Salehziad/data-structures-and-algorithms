'use strict';
module.exports = class binaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      //   console.log('ccc',node);
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  max() {
    let max = 0;
    let maxValue = (node) => {
      if (node.value>max) max=node.value;
      if (node.left) {
        let leftValue=node.left.value;
        console.log(leftValue);
        if (leftValue>max) max=leftValue;
        maxValue(node.left);
      }
      if(node.right) {
        let rightValue=node.right.value;
        console.log(rightValue);
        if (rightValue>max) max=rightValue;
        maxValue(node.right);
      }
    };
    maxValue(this.root);
    return max;
  }
  //  insertNode(node, newNode) {
  //     // console.log('111',newNode);
  //     // console.log('2222',node);
  //     if (newNode.value < node.value) {
  //       if (!node.left) node.left = newNode;
  //       else this.insertNode(node.left, newNode);
  //     } else {
  //       if (!node.right) node.right = newNode;
  //       else this.insertNode(node.right, newNode);
  //     }
  //     return newNode;
  //   }
};
