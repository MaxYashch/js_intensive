class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(maxElemStack = 10) {
    if (!Number.isSafeInteger(maxElemStack) || maxElemStack === 0)
      throw new Error('Max elements quantity is not a valid number');
    this.head = null;
    this.length = 0;
  }

  push(elem) {
    if (this.length === maxElemStack) throw new Error('Stack is full');
    let node = new Node(elem);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) throw new Error('Stack is empty');
    let topElement = this.head;
    this.head = this.head.next;
    this.length--;
    return topElement.data;
  }

  peek() {
    this.length === 0 ? null : this.head.data;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    const stackArray = [];
    let currentNode = this.head;
    while (currentNode) {
      stackArray.push(currentNode);
      currentNode = currentNode.next;
    }
    return stackArray;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function')
      throw new Error('Entity is not iterable!');
    let length = 0;
    let i;
    for (i of iterable) {
      length++;
    }
    let s = new Stack(length);
    for (i of iterable) {
      s.push(i);
    }
    return s;
  }
}

module.exports = { Stack };
