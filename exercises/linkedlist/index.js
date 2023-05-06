// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    insertAt(data, index) {
        if (index == 0) {
            this.head = new Node(data, this.head);

            return;
        }

        const previous = this.getAt(index - 1);

        if (previous) {
            previous.next = new Node(data, previous.next);
        } else {
            const last = this.getLast();

            last.next = new Node(data);
        }
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }

    getFirst() {
        return this.head;
    }

    getAt(index) {
        let node = this.head;
        let count = 0;

        while(node) {
            if (count == index) {
                return node;
            }

            node = node.next;
            count++;
        }

        return null;
    }

    getLast() {
        if (this.head == null) {
            return null;
        }

        let node = this.head;

        while(node.next) {
            node = node.next;
        }

        return node;
    }

    removeFirst() {
        if (this.head == null) {
            return null;
        }

        const temp = this.head;

        this.head = this.head.next;

        return temp;
    }

    removeAt(index) {
        if (this.head == null) {
            return null;
        }

        if (index == 0) {
            const temp = this.head;

            this.head = temp.next;

            return temp;
        }

        const previous = this.getAt(index - 1);
        
        if (previous && previous.next) {
            const temp = previous.next;

            previous.next = previous.next.next;

            return temp;
        }

        return null;
    }

    removeLast() {
        if (this.head == null) {
            return null;
        }

        if (this.head.next == null) {
            const temp = this.head;

            this.head = null;

            return temp;
        }

        let node = this.head;

        while(node.next.next) {
            node = node.next;
        }

        const temp = node.next;

        node.next = null;

        return temp;
    }

    clear() {
        this.head = null;
    }

    size() {
        let count = 0;
        let node = this.head;

        while(node) {
            count++;
            node = node.next;
        }

        return count;
    }

    forEach(func) {
        let node = this.head;

        let index = 0;
        
        while(node) {
            func(node, index);
            node = node.next;
            index++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        
        while(node) {
            yield node;
            node = node.next;
        }
    }

    // *[Symbol.index]() {
    //     let node = this.head;
    //     let count = 0;
        
    //     while(node) {
    //         yield count++;
    //         node = node.next;
    //     }
    // }
}

module.exports = { Node, LinkedList };
