class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return "underflowError: can\'t pop from an empty stack.";
        }
        const topValue = this.top.value;
        this.top = this.top.next;
        this.size--;
        return topValue;
    }

    peek() {
        if(this.isEmpty()) {
            return "the stack is empty.";
        }
        return this.top.value;
    }
}

module.exports = Stack;