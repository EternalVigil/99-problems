/*

create 2 link lists that are sorted from smallest to largest value
merge the two lists into a single linked list that is sorted

*/

const list1Values = [1,3,5,7];
const list2Values = [2,4,6,10,12];

class LinkedList {
    constructor(head) {
        this.head = head;
    }
}

class Link {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
};

const createLink = (value, previous) => {
    const link = new Link(value, previous);
};

const printList = (list) => {
    let temp = list.head;

    while(temp?.value) {
        console.log('value', temp?.value);
        temp = temp?.next;
    }
};

const createList = (values) => {
    const linkedList = new LinkedList();

    values.forEach((value, index) => {
        const link = new Link(value);

        if(index === 0) {
            linkedList.head = link;
        } else {
            let current = linkedList.head;

            while(current.next) {
                current = current.next;
            }

            current.next = link;
        }
    });

    return linkedList;
};

const mergeLists = (A, B) => {
    const head = new Link();

    if(A.value < B.value) {
        head.value = A.value;
        A = A.next;
    } else {
        head.value = B.value;
        B = B.next;
    }
    const list = new LinkedList(head);

    let tail = head;

    while(A && B) {
        let link = new Link();

        if(A.value < B.value) {
            link = A;
            A = A.next;
        } else {
            link = B;
            B = B.next;
        }

        tail.next = link;
        tail = link;
    }

    if(A) {
        tail.next = A;
    } else if(B) {
        tail.next = B;
    }    

    return list;
};

const listA = createList(list1Values);
const listB = createList(list2Values);

const mergedList = mergeLists(listA.head, listB.head);

printList(mergedList);