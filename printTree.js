class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function printBinaryTree(root, level = 0, prefix = '') {
    const SPACING = 4; // Adjust this value to change spacing between nodes

    if (root === null) {
        return;
    }

    printBinaryTree(root.right, level + 1, '    |');

    if (prefix === '') {
        console.log(root.value);
    } else {
        console.log(' '.repeat(level * SPACING) + prefix + '---' + root.value);
    }

    printBinaryTree(root.left, level + 1, '    |');
}

// Example JSON object representing a binary tree
const treeData = {
    "value": 10,
    "left": {
        "value": 9,
        "left": {"value": 7, "left": null, "right": null},
        "right": null
    },
    "right": {"value": 11, "left": null, "right": null}
};

// Function to build a binary tree from JSON object
function buildBinaryTreeFromJSON(data) {
    if (data === null) return null;
    const root = new TreeNode(data.value);
    root.left = buildBinaryTreeFromJSON(data.left);
    root.right = buildBinaryTreeFromJSON(data.right);
    return root;
}

// Build binary tree from JSON object
const rootNode = buildBinaryTreeFromJSON(treeData);

// Print binary tree
console.log("Binary Tree:");
printBinaryTree(rootNode);
