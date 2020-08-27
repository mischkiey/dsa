const BinarySearchTree = require('./3-create-a-bst-class');

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(9);
bst.insert(2);
bst.insert(5);
bst.insert(7);
bst.remove(3);

console.log(bst);
console.log(bst.right.right);