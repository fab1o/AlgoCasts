class Node {
    constructor(id, nodeLinks = []) {
        this.id = id;
        this.nodeLinks = [...nodeLinks]; // [1,2,3,4]
    }
}

class Graph {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    addEdge(id1, id2) {
        let node1 = this.nodes.find((node) => node.id === id1);

        if (!node1) {
            node1 = new Node(id1);
            this.addNode(node1);
        }

        const node2 = new Node(id2);
        this.addNode(node2);

        node1.nodeLinks.push(id2);

        return node2;
    }

    getChildren(id) {
        const node = this.nodes.find((node) => node.id === id);

        if (node) {
            return node.nodeLinks;
        }

        return null;
    }

    toString() {
        let str = '';

        const listChildren = (id, str = '') => {
            const node = this.nodes.find((node) => node.id === id);

            if (node) {
                for (let i = 0; i < node.nodeLinks.length; i++) {
                    const nodeLinkId = node.nodeLinks[i];

                    str += `'${nodeLinkId}', `;

                    str = listChildren(nodeLinkId, str);
                }
            }

            return str;
        };

        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];

            if (node.nodeLinks.length > 0) {
                let children = listChildren(node.id);

                children = children.substring(0, children.length - 2);

                str += `${node.id}:[${children}], `;
            }
        }
        
        str = str.substring(0, str.length - 2);

        return str;
    }
}

module.exports = { Node, Graph };
