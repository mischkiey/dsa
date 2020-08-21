const main = require('./2-create-singly-linked-list.js');
const ssl = main();

function isEmpty(linkedList) {
    return 'head' in linkedList;
};

console.log(isEmpty(ssl));