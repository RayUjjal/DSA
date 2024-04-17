class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        if(data==='N'){
            return;
        }
        let newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        else {
            let currentNode = this.root;
            while (currentNode) {
                if (data === currentNode.value) return undefined;
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    minValue(root) {
        // your code here
        let min = root.data;
        let currentNode = root;
        while (currentNode) {
            if (min > currentNode.data || min == null) {
                min = currentNode.data;
            }

            if (currentNode.right && currentNode.right.data > currentNode.data) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        return min;
    }

    printBinaryTree(root, level = 0, prefix = '') {
        const SPACING = 4; // Adjust this value to change spacing between nodes

        if (root === null) {
            return;
        }

        this.printBinaryTree(root.right, level + 1, '    |');

        if (prefix === '') {
            console.log(root.data + '---');
        } else {
            console.log(' '.repeat(level * SPACING) + prefix + '---' + root.data);
        }

        this.printBinaryTree(root.left, level + 1, '    |');
    }
}

let bt = new BinaryTree();
let input = [5, 4, 6, 3, 'N', 'N', 7, 1];
input.forEach(element => {
    bt.insert(element);

});
// bt.insert(10);
// bt.insert(11);
// bt.insert(9);
// bt.insert(7);
// bt.insert(20);
// // bt.insert(1);
// // bt.insert(0);
// bt.insert(22);
// bt.insert(12);
// bt.insert(2);
process.stdout.write("\n\n");
bt.printBinaryTree(bt.root);
process.stdout.write("\n\n");
console.log(bt.minValue(bt.root));
// console.log(JSON.stringify(bt));