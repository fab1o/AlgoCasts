// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor(node) {
        this.root = node
    }

    insert(data, node = this.root) {
        if (data < node.data) {
            if (node.left) {
                this.insert(data, node.left);
            } else {
                node.left = new Node(data);
            }
        } else {
            if (node.right) {
                this.insert(data, node.right);
            } else {
                node.right = new Node(data);
            }
        }
    }

    contains(data, node = this.root) {
        if (data === node.data) {
            return node;
        }

        if (data < node.data && node.left) {
            return this.contains(data, node.left);
        }

        if (data > node.data && node.right) {
            return this.contains(data, node.right);
        }

        return null;
    }

    inOrderSuccessor(data, node = this.root) {
        const list = [];

        let flagFound = false;
        let flagDone = false;
        
        let successor;

        function traverse(node) {
            if (flagDone) {
                return;
            }

            if (node.left) {
                traverse(node.left);
            }

            if (flagFound) {
                successor = node.data;
                flagFound = false;
                flagDone = true;
                return;
            }

            list.push(node.data);

            if (node.data === data) {
                flagFound = true;
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return successor;
    }

    traverseInOrder() {
        const list = [];

        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }

            list.push(node.data);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return list;
    }
}

module.exports = { BST, Node };
