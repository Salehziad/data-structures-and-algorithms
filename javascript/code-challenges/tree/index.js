'use strict';
// const binaryTree = require('./binary-tree');
const BinaryTree = require('./binary-tree');
const Node = require('./node');

let tree = null;
//cde challenge 16
let two = new Node(2);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let nine = new Node(9);
let eleven=new Node(11);
let xx=new Node(1);
two.left=seven;
two.right=five;
seven.right=six;
seven.left=xx;
six.left=five;
six.right=eleven;
five.right=nine;
nine.left=four;

tree=new BinaryTree(two);
// console.log(tree);
// let preOrder=tree.preOrder();
// console.log(preOrder);
let max=tree.max();
console.log({max});
////////////////////
// code challenge 15
// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);
// let eleven=new Node(11);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;

// tree=new BinaryTree(one);
// let preOrder=tree.preOrder();
// console.log(preOrder);
// let inOrder=tree.inOrder();
// console.log(inOrder);
// let postOrder=tree.postOrder();
// console.log(postOrder);
//////////////
