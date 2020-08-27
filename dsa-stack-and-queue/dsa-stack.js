class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    };
};

class Stack {
    constructor() {
        this.top = null;
    };

    // If the stack is empty, then the node will be the top of this stack
    //If stack is not empty, then create a new node
    // Add data to the node
    // Have pointer point to the top
    // O(1)
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        };

        const node = new _Node(data, this.top);
        this.top = node;
    };
    
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    };
};