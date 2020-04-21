class _Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
};

class LinkedList {
  constructor() {
    this.head = null;
  };

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  };

  insertLast(item) {
    if ( this.head === null ) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while ( tempNode.next !== null ) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  };

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if ( !this.head ) {
      return null;
    }
    
    // Check for the item
    while ( currNode.val !== item ) {
        /* Return null if it's the end of the list 
          and the item is not on the list */
      if ( currNode.next === null ) {
        return null;
      } else {
        // Otherwise keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  };

  remove(item) {
    // If the list is empty
    if ( !this.head ) {
      return null;
    }
    
    // If the node to be removed is head, make the next node head
    if ( this.head.val === item ) {
      this.head = this.head.next;
      return;
    }

    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let prevNode = this.head;

    while ( ( currNode !== null ) && currNode.val !== item ) {
      // Save the previous node
      prevNode = currNode;
      currNode = currNode.next;
    }

    if ( currNode === null ) {
      console.log('Item not found');
      return;
    }

    previousNode.next = currNode.next;
  };
};

module.exports = LinkedList;