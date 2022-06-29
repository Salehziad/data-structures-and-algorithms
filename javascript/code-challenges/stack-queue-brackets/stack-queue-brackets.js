'use strict';
const Stack = require('./stack/lib/stack');

function validateBrackets(string) {
  let StackBracket = new Stack();

  //convert string to array
  let stringArr = string.split('');

  let charactersSampel = [];
  stringArr.forEach((item) => {
    if (item === '{' || item === '[' || item === '(') {
      // console.log('push this', item);
      StackBracket.push(item);
    } else if (item === '}' && StackBracket.peek() === '{') {
      StackBracket.pop();
    } else if (item === ']' && StackBracket.peek() === '[') {
      StackBracket.pop();
    } else if (item === ')' && StackBracket.peek() === '(') {
      StackBracket.pop();
    } else {
      charactersSampel.push(item);
    }
  });

  if (
    StackBracket.peek() ||
    charactersSampel.includes('}') ||
    charactersSampel.includes(']') ||
    charactersSampel.includes(')')
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = validateBrackets;
