const createBst = require('./create-bst');

function isBst(bst, boolean) {
    if (bst.left == null && bst.right == null) {
        return boolean;
    };

    let isLeftBst = true;
    let isRightBst = true;

    if (bst.left) {
        isLeftBst = (bst.left.key < bst.key ? isBst(bst.left, true) : false);
    };

    if (bst.right) {
        isRightBst = (bst.right.key > bst.key ? isBst(bst.right, true) : false);
    };

    return isLeftBst && isRightBst;
};

console.log(isBst(createBst([1, 2, 3, 4, 5])));