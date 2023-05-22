// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data, children = []) {
        this.data = data;
        this.children = children;
    }

    // *traverseDF() {
    //     yield this.data;
    //     for (let child of this.children) {
    //         yield child;
    //     }
    // }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => node.data !== data);
    }
}   

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(func) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            node.children.forEach((child) => arr.push(child));

            func(node);
        }
    }

    traverseDF(func) {
        const arr = [this.root];

        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);

            func(node);
        }
    }
}

module.exports = { Tree, Node };
