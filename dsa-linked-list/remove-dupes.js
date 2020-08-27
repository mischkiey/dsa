function removeDupes(linkedList) {
    let currentNode = linkedList.head;

    while(currentNode.next !== null) {
        // Value of tempNode is dependent on currentNode
        // Which is always the node after currentNode
        let tempNode = currentNode.next;
        while(tempNode.next !== null) {
            if (tempNode.value === currentNode.value) {
                // If tempNode is a duplicate of currentNode
                // Remove tempNode by linking currentNode to the node after tempNode
                currentNode.next = tempNode.next.next;
            }
            else {
                tempNode = tempNode.next;
            };
        };
        currentNode = currentNode.next;
    };
};