const main = require('./2-create-singly-linked-list.js');
const ssl = main();

function findPrevious(linkedList, item) {
    if(linkedList.next === null) {
        throw new Error(`Cannot find ${item}`);
    };

    if('head' in linkedList && linkedList.head.value === item) {
        throw new Error(`Found ${item} in head`);
    };

    if('head' in linkedList) {
        return findPrevious(linkedList.head.next, item);
    };

    if(linkedList.next.value === item) {
        return linkedList;
    }

    return findPrevious(linkedList.next, item);

};

console.log(findPrevious(ssl, 'Hotdog'));