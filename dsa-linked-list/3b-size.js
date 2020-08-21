const main = require('./2-create-singly-linked-list.js');
const ssl = main();

function size(linkedList) {
    if(linkedList === null) {
        return 0;
    };

    if('head' in linkedList) {
        return 1 + size(linkedList.head.next);
    };

    return 1 + size(linkedList.next);
};

console.log(size(ssl));