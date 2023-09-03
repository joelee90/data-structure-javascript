// linkedList, node, add, search
const util = require('util');

class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
  }

  search(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current?.next;
      count++;
    }
    return current?.value;
  }

  remove(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      this.head = current.next;
      this.length--;
      return this.length;
    }
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
ll.remove(0);

// console.log(util.inspect(ll, false, null));
console.log(ll.search(2));
