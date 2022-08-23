/*
create a binary tree and output the left side view of the tree

example 
    1
   2  3
  4 5  6
        7

will output [1,2,4,7]
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.left.left = new Node(5);

root.right.right = new Node(6);
root.right.right.left = new Node(7);
root.right.right.right = new Node(10);
root.right.right.right.right = new Node(15);

const view = [];
const rowValues = {};

const traverseTree = (node, level) => {
    if(!rowValues[level]) {
        rowValues[level] = [];
    }

    rowValues[level].push(node?.value);


    const left = node?.left;
    if(left) traverseTree(left, level + 1);
    const right = node?.right;
    if(right) traverseTree(right, level + 1);
    

};

traverseTree(root, 0);
const leftValues = Object.values(rowValues).map((valueSet) => {
    return valueSet[0];
});
console.log('left view', leftValues);

const rightValues = Object.values(rowValues).map((valueSet) => {
    return valueSet[valueSet.length - 1];
});
console.log('right view', rightValues);