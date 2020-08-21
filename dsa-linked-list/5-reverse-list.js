const main = require('./2-create-singly-linked-list.js');
const sll = main();

// Initial currentNode = ssl
// Initial previousNode = null
function reverseList(previousNode, currentNode) {
    // Initialize reversedNode variable
    // reversedNode contains currentNode.value and previousNode (reversedNode of preceeding recursion)
    // This is so that the next node points to the previous node that points to a previous node
    // Otherwise, the result is a circular reference
    let reversedNode = {};

    if(currentNode === null) {
        previousNode.head = {
            value: previousNode.value,
            next: previousNode.next,
        };
        return 'Reversed';
    };

    if('head' in currentNode) {
        reversedNode.value = currentNode.head.value;
        reversedNode.next = previousNode;
        return reverseList(reversedNode, currentNode.head.next);
    };

    reversedNode.value = currentNode.value;
    reversedNode.next = previousNode;
    return reverseList(reversedNode, currentNode.next);
};

console.log(reverseList(null, sll));

// O(n)