const LinkedList = require('./1-create-linked-list-class.js');

function main() {
    let sll = new LinkedList()

    sll.insertFirst('Apollo');
    sll.insertFirst('Boomer');
    sll.insertFirst('Helo');
    sll.insertFirst('Husker');
    sll.insertFirst('Starbuck');
    sll.insertLast('Tauhida');
    // sll.remove('squirrel');
    sll.insertBefore('Athena', 'Boomer');
    sll.insertAfter('Hotdog', 'Helo');
    sll.insertAt('Kat', 3);
    sll.remove('Tauhida');

    return sll;
};

module.exports = main;