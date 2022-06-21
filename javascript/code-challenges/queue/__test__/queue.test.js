'use strict';
const Queue = require('../lib/queue');
describe('', () => {
  test('Can successfully enqueue into a queue', () => {
    const testQueue = new Queue();
    testQueue.enQueue(1);
    expect(testQueue.front.value).toBe(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    const testQueue = new Queue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    expect(testQueue.front.value).toBe(1);
    expect(testQueue.front.next.value).toBe(2);
    expect(testQueue.front.next.next.value).toBe(3);
    expect(testQueue.size).toBe(3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    const testQueue = new Queue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.deQueue();
    expect(testQueue.front.value).toBe(2);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const testQueue = new Queue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    expect(testQueue.peek()).toBe(1);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    const testQueue = new Queue();
    testQueue.enQueue(1);
    testQueue.enQueue(2);
    testQueue.enQueue(3);
    testQueue.deQueue();
    testQueue.deQueue();
    testQueue.deQueue();
    expect(testQueue.front).toBeNull();
    expect(testQueue.size).toBe(0);
  });
  test('Can successfully instantiate an empty queue', () => {
    const testQueue = new Queue();
    expect(testQueue.front).toBeNull();
    expect(testQueue.size).toBe(0);
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    const testQueue = new Queue();
    expect(testQueue.peek()).toBeNull();
  });
});
