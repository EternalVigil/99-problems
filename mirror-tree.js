/*
given 2 trees
validate that they are mirrors of each other
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const treeA = new Node(1);
treeA.left = new Node(2);
treeA.right = new Node(3);
treeA.left.left = new Node(4);
treeA.left.right = new Node(5);
treeA.right.right = new Node(6);
treeA.right.left = new Node(10);

const treeB = new Node(1);
treeB.right = new Node(2);
treeB.left = new Node(3);
treeB.right.right = new Node(4);
treeB.right.left = new Node(5);
treeB.left.left = new Node(6);

const levelMap = {};

const traverseTree = (node, level) => {
    if(!node) return;

    if(!levelMap[level]) {
        levelMap[level] = [];
    }

    if(node?.value) {
        console.log('value', node?.value);
        levelMap[level].push(node?.value);
    }
    
    const left = node?.left;
    const right = node?.right;

    traverseTree(left, level + 1);
    traverseTree(right, level + 1);

};

console.log('A');
traverseTree(treeA, 0);

console.log('B');
traverseTree(treeB, 0);
console.log('levelMap', levelMap);

const values = Object.values(levelMap);
let isMirror = true;
values.forEach((valueArray) => {
    console.log('value array', valueArray);
    if(valueArray.length % 2 !== 0) {
        isMirror = false;
    }

    valueArray.forEach((value, index) => {
        if(value !== valueArray[valueArray.length - (index + 1)]) {
            isMirror = false;
        }
    });
});
console.log('is mirror', isMirror);