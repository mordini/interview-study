//https://www.youtube.com/watch?v=UOxTMOCTEZk

/*
////////////////////
// HASH EXAMPLE 1 //
////////////////////

// really just an array with diff functions on top of it

const person = {}; // create an object for mapping
person['firstName'] = 'Steve'; // key/value pairs
person['lastName'] = 'Reeves';

console.log(person['firstName']); // show values based on keys
console.log(person['lastName']);
*/

/////////////////////////////////
//        HASH EXAMPLE 2       //
// CREATE HASH OF OUR VERY OWN //
/////////////////////////////////

// HASH FUNCTION - let us hash!
// uses arbitrary primes as multiples to spread out the keys
function hashStringToInt(string, tableSize) {
  let hash = 3; // start with prime number, this spreads out the keys

  // for each character get char code
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize; // create the indexes to store the values at
  }
  return hash;
}

class HashTable {
  // create array of a size for reasons
  table = new Array(2003);
  numItems = 0;

  // specify the API

  resize = () => {
    console.log(`about to resize`);

    const newTable = new Array(this.table.length * 2);

    console.log(this.table.length);

    // rehash table for resize, otherwise it'll be all kinds of wrong
    // SPEED COST!
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const index = hashStringToInt(key, newTable.length); // get index from hash function
          // VIOLATION OF D.R.Y., DONE FOR SPEED IN EXAMPLE
          if (newTable[index]) {
            newTable[index].push([key, value]);
          } else {
            newTable[index] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  }; //end resize

  // store the key/value into array
  setItem = (key, value) => {
    this.numItems++; // doesn't handle duplicate cases

    // check how full is the table? increase if needed
    const loadFactor = this.numItems / this.table.length;
    if (loadFactor > 0.8) {
      //resize
      this.resize();
    }

    // create the index with hash function using the key
    const index = hashStringToInt(key, this.table.length); // create index using hash function for storing

    // place the value in the array using generated index
    // Open Addressing, placing an item in the array anywhere, despite calculated address
    if (this.table[index] === undefined) {
      // nothing there, pass in the array with the array inside of it (chaining: (collision handling))
      this.table[index] = [[key, value]];
    } else {
      // if the table already has that index
      this.table[index].push([key, value]); // if so, push it into the storage array
    }
  };

  // retrieve value based on key
  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length); // get the index of the key from hash function

    // check if does not exist, let the user know
    if (!this.table[index]) {
      console.log(`There is nothing for index ${index}.`);
      return;
    }

    return this.table[index].find((x) => x[0] === key); // find where first element of inserted arrays is equal to our key
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Steve');
myTable.setItem('lastName', 'Reeves');
myTable.setItem('age', 5);
myTable.setItem('dob', '01/02/03');

console.log(myTable.table.length);
console.log(myTable.table);

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('dob'));
