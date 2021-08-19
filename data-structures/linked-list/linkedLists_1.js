/*

NOTES:
1.  the end of the list is noted by ending in NULL

*/

/*
////////////////////
// NODE EXAMPLE 1 //
////////////////////
  // TWO COMPLETELY SEPARATE NODES (as object literals)
  // node 1
  const n1 = {
    data: 100,
  };

  // node 2
  const n2 = {
    data: 200,
  };

  // link the lists
  n1.next = n2;

  // show results
  console.log(n1);
*/

////////////////////
// NODE EXAMPLE 2 //
////////////////////

// LINKED LIST NODE CLASS
class Node {
  // next is the pointer, defaults to null to be end of the list
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100);
console.log(n1);

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // FUNCTIONS TO MANIPULATE THE LIST

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // insert the data, head will either be NULL, or contain information about the NEXT node
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);
    let currentHead;

    // take care of empty edge case
    // if empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        //make sure there's a next value
        currentNode = currentNode.next;
        this.size++;
      }
      currentNode.next = node;
    }
  }

  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
  printListData() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

// TEST INSERT FIRST NODE
const linkedlist = new LinkedList();
linkedlist.insertFirst(100);
linkedlist.insertFirst(200);
linkedlist.insertFirst(300);

// CHECK LINKED LIST
linkedlist.printListData();
