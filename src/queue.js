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
class Queue {
constructor () {
this.result = null;
this.ind = 0;
}
  getUnderlyingList() {
    return this.result;
  }

  enqueue(value) {
    if (this.ind === 0) {
      this.result = new ListNode(value);
      this.ind++;
    } else {
      let num = this.result;
      while (num.next) {
        num = num.next;
      }
      num.next = new ListNode(value);
      this.ind++;
    }
    return this;
  }

  dequeue() {
    let itog = this.result;
    this.result = itog.next;
    this.ind = this.ind - 1;
    return itog.value;
  }
}

module.exports = {
  Queue
};
