/*
Create a binary sum tree and a function / series of functions
to validate that is a real sum tree

valid example
     29
  10   03
04 06    03
       02  01


invalid example
    29
  10   03
04 06    03
       02  02
*/

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

const root = new Node(29);

root.left = new Node(10);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(6);

root.right.right = new Node(3);
root.right.right.left = new Node(2);
root.right.right.right = new Node(1);

let runningTotal = 0;

const isLeaf = (node) => {
    if(!node) return false;

    if(!node?.left && !node?.right) return true;

    return false;
};

const isSumTree = (node) => {
    if(!node) return;

    const isCurrentLeaf = isLeaf(node);

    const leftSide = isSumTree(node?.left);
    if(leftSide === false) return;

    const rightSide = isSumTree(node?.right);
    if(rightSide === false) return;

    const leftValue = node?.left?.value ?? 0;
    const rightValue = node?.right?.value ?? 0;
    const sumOfChildren = leftValue + rightValue;
    console.log('current');
    console.log(node);
    console.log(sumOfChildren, node?.value);

    if(isCurrentLeaf || sumOfChildren === node?.value) {
        runningTotal += node?.value;
    } 
};

isSumTree(root);
console.log('running total', runningTotal);
console.log('is sum tree', root?.value === runningTotal);