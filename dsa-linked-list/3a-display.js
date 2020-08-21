const main = require('./2-create-singly-linked-list.js');
const ssl = main();

function display(linkedList) {
    if(linkedList === null) {
        return '';
    };

    if('head' in linkedList) {
        return `${linkedList.head.value} ${display(linkedList.head.next)}`
    };

    return `${linkedList.value} ${display(linkedList.next)}`;
};

console.log(display(ssl)); // Returns a string of values for now

module.exports = display;