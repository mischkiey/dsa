const Array = require('./1-implement-an-array.js');

function main() {
    Array.SIZE_RATIO = 3;
    
    let arr = new Array();
    
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
    arr.pop();
  
    arr.push('tauhida');
  
    console.log(arr);
    console.log(arr.get(0));
};
    
main();
  
// Because memory is a float64 array, it expects a numeric.
// _resize creates a copy of the old array at a new location and with greater capacity.