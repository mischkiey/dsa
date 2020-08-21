const main = require('./2-create-singly-linked-list.js');
const ssl = main();

function findLast(linkedList) {
    if(linkedList.next === null) {
        return linkedList;
    };

    if('head' in linkedList) {
        return findLast(linkedList.head.next);
    };

    return findLast(linkedList.next);

};

console.log(findLast(ssl));