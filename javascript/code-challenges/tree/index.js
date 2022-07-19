'use strict';
// const binaryTree = require('./binary-tree');
const BinaryTree = require('./binary-tree');
const Node = require('./node');

// let tree = null;

let two = new Node(2);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(15);
let nine = new Node(9);
let eleven=new Node(11);
let two_lv3=new Node(2);
two.left=seven;
two.right=five;
seven.right=six;
seven.left=two_lv3;
six.left=five;
six.right=eleven;
five.right=nine;
nine.left=four;
/////////////////////////////////      19
// let t1=new Node('folder');//
// let t2=new Node('folder');//
// let t3=new Node('folder');//
// let t4=new Node('.js');//
// let t5=new Node('folder');//
// let t6=new Node('folder');//
// let t7=new Node('.py');//
// let t8=new Node('.py');//
// let t9=new Node('.json');//
// let t10=new Node('.json');//
// t1.left=t2;//
// t1.right=t3;//
// t2.left=t4;//
// t2.right=t5;//
// t3.right=t6;//
// t5.left=t7;//
// t5.right=t8;//
// t6.left=t9;//
// t6.right=t10;//
/////////////////////////////      19
let tree=new BinaryTree(two);
let x=tree.fizzBuzz();
console.log(x);
// let x="sara";
// console.log(x.includes("."));
// console.log(tree.che);
// let x=tree.checkFiles();
// let y=tree.checkFiles();
// let check=(x===y)?true:false;
// console.log(check);
