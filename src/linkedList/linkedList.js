
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    append(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }

        node.next = this.head;
        this.head = node;
        this.size++;
    }

}