'use strict';
const Stack = require('../lib/stack');

describe('', () => {
  test('Can successfully push onto a stack', () => {
    const newStack=new Stack();
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
    expect(newStack.size).toBe(1);
  });
  test('Can successfully push multiple values onto a stack',()=>{
    const newStack=new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.top.value).toBe(3);
    expect(newStack.top.next.value).toBe(2);
    expect(newStack.top.next.next.value).toBe(1);
    expect(newStack.size).toBe(3);
  });
  test('Can successfully pop off the stack',()=>{
    const newStack=new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.pop();
    expect(newStack.size).toBe(1);
  });
  test('Can successfully empty a stack after multiple pops',()=>{
    const newStack=new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.pop();
    newStack.pop();
    newStack.pop();
    newStack.pop();
    expect(newStack.top).toBeNull();
    expect(newStack.size).toBe(0);
  });
  test('Can successfully peek the next item on the stack',()=>{
    const newStack=new Stack();
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    expect(newStack.peek()).toBe(3);
  });
  test('Can successfully instantiate an empty stack',()=>{
    const newStack=new Stack();
    expect(newStack.top).toBeNull();
    expect(newStack.size).toBe(0);
  });
});
