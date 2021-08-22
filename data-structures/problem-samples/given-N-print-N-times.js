// Given an integer N, print 'hello world' N times.

const print = (num) => {
  for (let i = 0; i < num; i++) {
    console.log(`hello, world ${i}`);
  }
};

print('5');
