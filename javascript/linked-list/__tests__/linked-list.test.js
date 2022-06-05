const { listenerCount } = require('process');
const LinkedList = require('../index');

describe('', () => {
  test.skip('Can successfully instantiate an empty linked list', () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  test.skip('Can properly insert into the linked list', () => {
    const ll = new LinkedList();
    ll.insertFirst('first');
    expect(ll.head.data).toBe('first');
    expect(ll.head.next).toBeNull();
    expect(ll.size).toBe(1);
  });
  test.skip('The head property will properly point to the first node in the linked list', () => {
    const ll = new LinkedList();
    ll.insertFirst('first');
    ll.insertFirst('second');
    expect(ll.head.data).toBe('second');
    expect(ll.head.next.data).toBe('first');
    expect(ll.head.next.next).toBeNull();
    expect(ll.size).toBe(2);
  });
  test.skip('Can properly insert multiple nodes into the linked list', () => {
    const ll = new LinkedList();
    ll.insertFirst('1');
    ll.insertFirst('2');
    ll.insertFirst('3');
    ll.insertFirst('4');
    ll.insertFirst(1);
    ll.insertFirst(2);
    ll.insertFirst(3);
    ll.insertFirst(4);
    expect(ll.size).toBe(8);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    const ll = new LinkedList();
    ll.insertFirst('first');
    ll.insertFirst('second');
    ll.insertFirst(3);
    ll.insertFirst(4);
    expect(ll.getSpecificData('first')).toBe(true);
    expect(ll.getSpecificData(4)).toBe(true);
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const ll = new LinkedList();
    ll.insertFirst('first');
    ll.insertFirst('second');
    ll.insertFirst(3);
    ll.insertFirst(4);
    expect(ll.getSpecificData('firstone')).toBe(false);
    expect(ll.getSpecificData(444)).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const ll = new LinkedList();
    ll.insertFirst('first');
    ll.insertFirst('second');
    expect(ll.printListData()).toBe('{second} -> {first} -> NULL');
  });
});
