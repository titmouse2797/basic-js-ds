const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


class Queue {
  constructor() {
    this.list = null;
    this.queue = null;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);
    if (!this.list) {
      this.list = this.queue = newListNode;
    } else {
      this.queue.next = newListNode;
      this.queue = newListNode;
    }
  }

  dequeue() {
    const result = this.list.value;
    this.list = this.list.next;
    return result
  }
}


module.exports = {
  Queue
};
