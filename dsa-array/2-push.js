const Array = require('./1-implement-an-array.js');

function main() {
    Array.SIZE_RATIO = 3;

    let arr = new Array();

    arr.push(3);
    // Array {length: 1, capacity: 3, ptr: 0}
    arr.push(5);
    arr.push(15);
    // Array {length: 3, capacity 12, ptr: 3}
    arr.push(19);
    arr.push(45);
    arr.push(10);
    // Array {length: 6, capacity: 12, ptr: 3}

    console.log(arr);
};

main();