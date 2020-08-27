class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

class Stack {
    constructor() {
        this.top = null;
    };

    push(value) {
        // Where top = bottom of stack
        if(this.top === null) {
            this.top = new _Node(value, null);
        };

        const node = new _Node(value, this.top);
        this.top = node;

        // Alternatively
        // const node = this.top;
        // this.top = new _Node(value, node);
    };

    pop() {
        if(this.top === null) {
            return;
        };

        const node = this.top;
        this.top = node.next;
        return node.value;
    };
};

module.exports = Stack;