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
    // Array {length: 3, capacity: 12, ptr: 3}

    console.log(arr);
};

main();