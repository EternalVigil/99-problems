/*

Given a linked list
reverse the order

*/

class LinkedList {
    constuctor(node) {
        this.head = node;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

const values = [1,2,3,4,5];
/*
let list = new LinkedList();
let head = new Node();
head.value = 1;
list.head = head;


let tail = head;

let nodeA = new Node(2);
nodeA.previous = tail;
tail.next = nodeA;
tail = nodeA;

let nodeB = new Node(3);
nodeB.previous = tail;
tail.next = nodeB;
tail = nodeB;

console.log(list);
*/

let list = new LinkedList();
let tail = new Node();


values.forEach((value) => {
    let node = new Node(value);

    if(!list.head) {
        list.head = node;
    }

    node.previous = tail;
    tail.next = node;
    tail = node;
});

console.log(list);

let runner = list.head;
while(runner?.value) {
    console.log(runner.value);
    runner = runner.next;
}

console.log('NOW IN REVERSE');

let temp = tail;
while(temp?.value) {
    console.log(temp.value);
    temp = temp.previous;
}