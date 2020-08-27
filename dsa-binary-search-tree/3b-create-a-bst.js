const BinarySearchTree = require('./3-create-a-bst-class');

const bst = new BinarySearchTree();

bst.insert('E');
bst.insert('A');
bst.insert('S');
bst.insert('Y');
bst.insert('Q');
bst.insert('U');
bst.insert('E');
bst.insert('S');
bst.insert('T');
bst.insert('I');
bst.insert('O');
bst.insert('N');

console.log(bst);
console.log(bst.right.left);