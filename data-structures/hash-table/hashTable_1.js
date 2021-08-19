// ////////////////////
// // HASH EXAMPLE 1 //
// ////////////////////

// // look information up as key/value pairs

// const person = {}; // Object to store info
// person['firstName'] = 'Steve'; // associate firstName with a name
// person['lastName'] = 'Reeves'; // associate lastName with a name
// console.log(person['firstName']); //show results

///////////////////////
// HASH EXAMPLE 2    //
// IMPLEMENT OUR OWN //
///////////////////////

class HashTable {
  table = new Array(100); // making the array a specific size

  // METHOD: hash function.  maps out the hash.
  hashStringToInt(key, tableSize) {
    // loop through the string
    let hash = 17; // arbitrary prime number, spreads out where keys are stored

    for (let i = 0; i < key.length; i++) {
      hash = (13 * hash * key.charCodeAt(i)) % tableSize; // arbitrary prime for hash, using mod to keep hash from getting to big for table
      // console.log(hash);
    }

    // console.log(`hash is: ${hash}`);

    return hash;
  }

  // METHOD: Place items in Hash
  setItem(key, value) {
    const index = this.hashStringToInt(key, this.table.length); //get the key as an int for index

    // if there is a value already at index in the table
    if (this.table[index]) {
      this.table[index].push([key, value]); //put key/val into array
    } else {
      this.table[index] = [[key, value]]; // put in array with array inside of it
    }

    this.table[index] = [[key, value]]; // Insert value at index using CHAINING, store it as an array to avoid collision
  }

  // METHOD: Get items from Hash
  getItem(key) {
    const index = this.hashStringToInt(key, this.table.length); // get the index for the key
    //if (!this.table[index]) return null; // error-check for if it doesn't exist
    return this.table[index];
    //return this.table[index].find((x) => x[0] === key); // find where first element (index 0) of array is equal to key
  }
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Steve');
myTable.setItem('lastName', 'Reeves');
myTable.setItem('age', 5);
myTable.setItem('dob', '01/02/03');

console.table(myTable.table);

//console.log(myTable.getItem('dob'));

// console.log(myTable.table[0]);

// console.log(myTable.getItem('firstName'));
