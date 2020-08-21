// Analyze the following function to determine what problem it is trying to solve.
// What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            };
        };
        current = current.next;
    };
};

// This function looks for duplicates and removes them.
// O(n^2)



