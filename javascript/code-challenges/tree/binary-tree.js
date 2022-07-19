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
      if (node.value > max) max = node.value;
      if (node.left) {
        let leftValue = node.left.value;
        // console.log(leftValue);
        if (leftValue > max) max = leftValue;
        maxValue(node.left);
      }
      if (node.right) {
        let rightValue = node.right.value;
        // console.log(rightValue);
        if (rightValue > max) max = rightValue;
        maxValue(node.right);
      }
    };
    maxValue(this.root);
    return max;
  }
  breadthFirst() {
    let result = [];
    let traverse = (node) => {
      // for(let i=0;i<1;i++){
      // console.log(node);
      result.push(node.value);
      if (node.left) result.push(node.left.value);
      if (node.right) result.push(node.right.value);
      // }
      if (node.left) traverse(node.left);
    };
    traverse(this.root);
    return result;
  }

  
  checkFiles() {
    let count = 0;
    let traverse = (node) => {
      if (node.left) {
        console.log(node.left.value);
        if (node.left.value.includes('.')) {
          count++;
          // console.log("hh");
        }
        traverse(node.left);
      }
      if (node.right) {
        if (node.right.value.includes('.')) {
          count++;
          // console.log("bb");
        }
        traverse(node.right);
      }
    };
    traverse(this.root);
    return count;
  }


  fizzBuzz() {
    let traverse = (node) => {
      if (node.left) {
        (node.left.value % 3 === 0 && node.left.value % 5 === 0) ? node.left.value = 'FizzBuzz': (node.left.value % 3 === 0) ? node.left.value = 'Fizz' : (node.left.value % 5 === 0) ? node.left.value = 'Buzz' : null;
        console.log(node.left);
        traverse(node.left);
      }
    };
    traverse(this.root);
    // return(traverse());
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
