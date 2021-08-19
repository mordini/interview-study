/*
NOTES:
1.  some edge cases are not accounted for, like -1 index searches
2.  INDEX SPECIFIC OPERATIONS ARE SLOW!

this is just examples of Linked Lists and node manipulation in general

*/

/*
////////////////////
// NODE EXAMPLE 1 //
////////////////////

const node1 = {
  value: 100,
};

const node2 = {
  value: 200,
};
node1.next = node2;

console.log(node1);
*/

////////////////////
// NODE EXAMPLE 2 //
////////////////////

class Node {
  // default pointer to null to indicate end of list
  constructor(data, next = null) {
    this.data = data; // the value
    this.next = next; // pointer to next node
  }
}

const node1 = new Node(100);
console.log(node1);

class LinkedList {
  constructor() {
    this.head = null; //no first element, empty list
    this.size = 0;
  }

  // Insert first node
  insertFirstNode(data) {
    this.head = new Node(data, this.head); // put this.head so if there's already something in first, it gets pushed to next
    this.size++; // add one to the size after adding the node
  }

  // Insert last node
  insertLastNode(data) {
    let node = new Node(data); // make a new node
    let currentNode;

    // if no head, make the head
    if (!this.head) {
      this.head = node; // make it the brand new node
      // if head exists
    } else {
      currentNode = this.head; // start at beginning

      // loop through the LinkedList
      // check if NEXT exists (remember, if null it's the end!)
      while (currentNode.next) {
        currentNode = currentNode.next; // set it to the next for checking
      }
      currentNode.next = node; // we reached the end of the loop, add the node
    }
    this.size++; // add one to the size after adding the node
  }

  // METHOD: Insert at index
  insertAtIndex(data, index) {
    // BEGIN HANDLE EDGE CASES
    // what if index doesn't exist?
    // if index is out of range, stop
    if (index > 0 && index > this.size) {
      this.showOutOfRangeError(index);
      return;
    }

    // if it's the first index?  set to head
    if (index === 0) {
      this.head = new Node(data, this.head); // we could reuse first function, but what if it changes?
      return;
    }
    // END HANDLE EDGE CASES

    // No Edge Cases, do the insert
    const node = new Node(data);
    let currentNode, previousNode;

    currentNode = this.head;
    let count = 0;

    // we're counting up to the index we wish to insert
    while (count < index) {
      previousNode = currentNode; // Node before index (less than index)
      count++;
      currentNode = currentNode.next; // Node after index
    }
    node.next = currentNode; //the NEW node.next is the value of the current
    previousNode.next = node;
  }

  // NETHOD: Get at index
  getAtIndex(index) {
    let currentNode = this.head; // set current to beginning
    let count = 0;

    while (currentNode) {
      // are we at the index?
      if (count === index) {
        console.log(`index ${index} is: ${currentNode.data}`);
      }
      //otherwise, we keep traversing the nodes
      count++;
      currentNode = currentNode.next;
    }

    if (index > this.size) {
      this.showOutOfRangeError(index);
      // break it
      return null;
    }
  }

  // METHOD: Remove at index
  removeAtIndex(index) {
    let currentNode = this.head; // start at the beginning
    let previousNode;
    let count = 0;

    // handle OOR error
    if (index > 0 && index > this.size) {
      this.showOutOfRangeError(index);
      return;
    }

    // it's the first one?  use that
    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (count < index) {
        count++;
        previousNode = currentNode;
        currentNode = current.next;
      }
      previousNode.next = currentNode.next;
    }
    this.size--;
  }

  // METHOD: Clear List
  clearList() {
    console.log(`CLEARING THE LIST`);

    this.head = null;
    this.size = 0;
  }

  // METHOD: Print list data
  printListData() {
    let currentNode = this.head;
    if (!this.head) console.log(`list is EMPTY`);

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  // METHOD: show OOR error
  showOutOfRangeError(index) {
    console.log(
      `index: ${index} is out of range.\nMaxiumum index is ${this.size}.`
    );
  }

  // METHOD: Remove last in list
  // METHOD: Remove first in list
  // METHOD: Get last in list
  // METHOD: Get first in list
}

const linkedlist = new LinkedList();
linkedlist.insertFirstNode(100);
linkedlist.insertFirstNode(200);
linkedlist.insertFirstNode(300);
linkedlist.insertLastNode(400);
linkedlist.insertFirstNode(900);
linkedlist.insertAtIndex(5, 2);
linkedlist.printListData();
linkedlist.getAtIndex(500);
linkedlist.removeAtIndex(100);
console.log(`----------------`);
linkedlist.printListData();
linkedlist.clearList();
linkedlist.printListData();
