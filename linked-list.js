/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      if (current.next.next === null) {
        let last = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return last;
      }
      else {
        current = current.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) {
      return null;
    }
    let first = this.head;
    this.head = first.next;
    this.length--;
    return first;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) {
        return current.val;
      }
      current = current.next;
      count++;
    }
  }


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      count++;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count + 1 === idx) {
        const newNode = new Node(val);
        newNode.next = current.next;
        current.next = newNode;
        if (!newNode.next) {
          this.tail = newNode;
        }
        this.length++;
        return;
      }
      current = current.next;
      count++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count + 1 === idx) {
        item = current.next;
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.length--;
        return item;
      }
      current = current.next;
      count++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let total = current.val;
    while (current) {
      total += current.next;
      current = current.next;
    }
    avg = total / this.length;
    return avg;
  }
}

module.exports = LinkedList;
