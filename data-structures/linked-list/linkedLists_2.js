class Node {
  constructor(value, next = null) {
    // add to front
    addToFront: {
      this.value = value;
      this.next = next;
      console.log(`added value: ${value}, next: ${next}, to front`);
    }
    // add to tail
    addToEnd: {
      this.value = value;
      this.next = next;
      console.log(`added value: ${value}, next: ${next}, to end`);
    }
    // remove node
    // get from index
    // print results
  }
}

const node_1 = new Node(4);

console.log(node_1);
