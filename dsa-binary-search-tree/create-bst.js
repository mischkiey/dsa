const BinarySearchTree = require('./3-create-a-bst-class');

function createBst(arr) {
    const bst = new BinarySearchTree();

    for(let i = 0; i< arr.length; i++) {
        bst.insert(arr[i]);
    };

    return bst;
};

module.exports = createBst;