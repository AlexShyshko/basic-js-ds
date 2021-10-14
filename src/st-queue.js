const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.node = new ListNode();
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.node.value === undefined) {
      this.node.value = value;
      return;
    }
    let tempNode = this.node;

    while (tempNode !== null) {
      if (tempNode.next === null) {
        tempNode.next = new ListNode(value);
        break;
      } else {
        tempNode = tempNode.next;
      }
    }
  }

  dequeue() {
    let dequeuedValue = this.node.value;
    this.node = this.node.next;
    return dequeuedValue;
  }

}
