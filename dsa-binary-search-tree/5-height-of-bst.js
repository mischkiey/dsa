const createBst = require('./create-bst');

// function printHeightOfBst(bst, height = 0) {
//     let result = [];

//     function findHeightOfBst(bst, height = 0) {
//         if(bst.left == null && bst.right == null) {
//             result.push(height);
//             return;
//         };

//         if(bst.left) {
//             findHeightOfBst(bst.left, height + 1);
//         };

//         if(bst.right) {
//             findHeightOfBst(bst.right, height + 1);
//         };
//     };

//     findHeightOfBst(bst, height = 0);
//     return result;
// };

// BUT CAN WE MAKE IT FASTER?!
function findHeightOfBst(bst, height = 0) {
    if (bst.left == null && bst.right == null) {
        return height;
    };

    let leftHeight = 0;
    let rightHeight = 0;
    
    if (bst.left) {
        leftHeight = findHeightOfBst(bst.left, height + 1);
    };

    if (bst.right) {
        rightHeight = findHeightOfBst(bst.right, height + 1);
    };

    return (leftHeight > rightHeight ? leftHeight: rightHeight);
};

// console.log(printHeightOfBst(createBst([1, 2, 3, 4, 5])));
// console.log(printHeightOfBst(createBst([5, 4, 3, 2, 1])));
// console.log(printHeightOfBst(createBst([1, 3, 2, 5, 4])));
// console.log(printHeightOfBst(createBst([2, 1, 4, 3, 5])));

console.log(findHeightOfBst(createBst([1, 2, 3, 4, 5]))); // 4
console.log(findHeightOfBst(createBst([5, 4, 3, 2, 1]))); // 4
console.log(findHeightOfBst(createBst([1, 3, 2, 5, 4]))); // 3
console.log(findHeightOfBst(createBst([2, 1, 4, 3, 5]))); // 2
console.log(findHeightOfBst(createBst([1, 1, 1]))); // 2



