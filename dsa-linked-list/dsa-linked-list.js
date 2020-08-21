class _Node {
    constructor(value, next) {
        // Holds the data
        this.value = value;
        // Points to the next node
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        // Indicates the beginning of the list
        this.head = null;
    };

    // Create a new node item
    // Point the head to that new node
    // O(1)
    insertFirst(item) {
        this.head = new _Node(item, this.head);
    };

    // Create a new node item
    // Check to see if list is empty
    // If it is, insert the new item as the only item in the list
    // Start at the beginning of the list and move through the list until you reach the end of the list
    // Set the end node's next pointer to the new node
    // The new node's next pointer is null
    // O(n)
    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        };
    };

    // Traverse the list
    // Compare the value stored in each node with the value being searched
    // When item is found, return the node
    find(item) {
        let currNode = this.head;
        
        if(this.head === null) {
            return null;
        };

        while(currNode.value !== item) {
            if(currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            };
        };
        return currNode;
    };

    // Find the node to delete
    // Take the previous node's next pointer and point it to the node after the node to delete
    remove(item) {
        // O(1)
        if(this.head === null) {
            return null;
        };

        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        };

        let currNode = this.head;
        let previousNode = this.head;

        // O(n)
        while((currNode !== null) && (currNode.value !== item)) {
            currNode = currNode.next;
            previousNode = currNode;
        }
        if(currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    };
};