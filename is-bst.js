/*
check to see if tree is binary search tree
*/


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const root = new Node(100);
root.left = new Node(50);
root.right = new Node(200);

root.left.left = new Node(25);
root.left.right = new Node(75);

root.right.left = new Node(125);
root.right.right = new Node(350);

const checkBST = (node, min, max) => {
    if(!node) return true;

    const value = node?.value;

    if(value < min || value > max) {
        return false;
    }

    const left = node?.left;
    const right = node?.right;

    return( checkBST(left, min, node?.value) && checkBST(right, node?.value, max) );


}

const isBST = checkBST(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
console.log('isBST', isBST);