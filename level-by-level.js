/*
given the root of a binary search tree
print out the values by row

example
     100
   50   200
  25 75    350

outputs
100
50, 200
25, 75, 350
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

root.right.left = new Node(140);
root.right.right = new Node(350);
root.right.right.left = new Node(325);

/*
const values = {};

const printNode = (node, level) => {
    if(!node) return;

    if(!values[level]) {
        values[level] = [];
    }
    values[level].push(node?.value);

    
    const left = node?.left;
    const right = node?.right;

    printNode(left, level + 1);
    printNode(right, level + 1);

};

printNode(root, 0);
const valueArray = Object.values(values).forEach((entry) => {
   console.log('entry', entry.join(', '));
});
*/

const printNode = (node) => {
    if(!node) return;

    const queues = [[], []];

    let [current, next] = queues;

    current.push(node);

    let level = 0;

    while(current.length) {
        let temp = current.shift();
        console.log(temp.value + ' ');

        const left = temp?.left;
        const right = temp?.right;

        if(left) {
            next.push(left);
        }

        if(right) {
            next.push(right);
        }

        if(current.length === 0) {
            level++;
            current = queues[level % 2];
            next = queues[ (level + 1) % 2]
        }

    }
};

printNode(root);
