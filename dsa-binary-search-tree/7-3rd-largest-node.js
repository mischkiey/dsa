const createBst = require('./create-bst');

// function thirdLargestNode(bst, secondLargest = null, thirdLargest = null) {
//     if (bst.right == null) {
//         console.log(`Largest: ${bst.key}`)
//         console.log(`Third Largest: ${thirdLargest.key}`)
//         return thirdLargest.key;
//     };

//     thirdLargest = (bst.left ? bst.left : secondLargest == null ? null : secondLargest);

//     if (bst.right) {
//         thirdLargestNode(bst.right, bst, thirdLargest);
//     };

// };

function findThirdLargestNode(bst, secondLargestNode = null, thirdLargestNode = null) {
    if (bst.right == null) {
        secondLargestNode = (bst.left ? bst.left : bst.parent);
        thirdLargestNode = (bst.left ? bst.parent : bst.parent.left);

        console.log(`Largest: ${bst}`);
        console.log(`Third Largest: ${thirdLargestNode}`);
        return thirdLargestNode;
    };

    // secondLargestNode = (bst.left ? bst.left : secondLargest == null ? null : secondLargest)
    // thirdLargestNode;
};

console.log(thirdLargestNode(createBst([1, 2, 3, 4, 5])));

console.log(thirdLargestNode(createBst([5, 4, 3, 2, 1])));