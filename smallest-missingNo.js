/*
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

// const input = [1, 3, 6, 4, 1, 2, 9];
// const input = [1,2,3];
// const input = [-1, -3];
// const input = [2, 3, -7, 6, 8, 1, -10, 15];
// const input = [2, 3, 7, 6, 8, -1, -10, 15];
// const input = [1, 1, 0, -1, -2];
// const input = [-1, 0, 0, 0, 4, 1];

const findSmallestGap = (input) => {
    const sorted = input.sort((a, b) => { return a - b});
    // console.log('sorted', sorted);

    let smallest;
    
    for(let i = 0; i < sorted.length; i++) {
        const a = sorted[i - 1];
        const b = sorted[i];
    
        const isSequence = a + 1 !== b;
        const isNotEqual = a !== b;
        const aIsNumber = !Number(isNaN(a));
        const bLargerThanOne = b > 1;
    
        if(aIsNumber && isSequence && isNotEqual && bLargerThanOne) {
            // console.log('gap', a, b);
            smallest = a + 1;
            break;
        }
    }
    
    if(smallest <= 0) {
        smallest = 1;
    } else if(!smallest) {
        smallest = Math.max((sorted[sorted.length - 1] + 1), 1);
    }
    console.log('smallest', smallest);  
    return smallest;    
};

const removeNegatives = (array, size) => {
    let j = 0;
    for(let i = 0; i < size; i++) {
        if(array[i] <= 0) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j++;
        }
    }
    return j;
}

const findMissingPositives = (array, size) => {

    let i;

    for(i = 0; i < size; i++) {
        const absNumber = Math.abs(array[i]);

        if(absNumber - 1 < size && array[absNumber - 1] > 0) {
            array[absNumber - 1] = -array[absNumber - 1];
        }
    }
    console.log('array', array);

    for(i = 0; i < size; i++) {
        if(array[i] > 0) {
            return i + 1;
        }
    }
    return size + 1;

};

const findMissing = (input, size) => {
    console.log('input', input);
    let index = removeNegatives(input, size);
    console.log('index', index);
    const newArray = new Array(size - index);

    let j = 0;
    for(let i = index; i < size; i++) {
        newArray[j] = input[i];
        j++;
    }
    console.log('new array', newArray);
    return findMissingPositives(newArray, j);
};

const inputs = [
    [1, 3, 6, 4, 1, 2, 9],
    [1,2,3],
    [-1, -3],
    [2, 3, -7, 6, 8, 1, -10, 15],
    [2, 3, 7, 6, 8, -1, -10, 15],
    [1, 1, 0, -1, -2],
    [-1, 0, 0, 0, 4, 1],
    [-10, 4, 7, 3, 2, 19, 14, -100],
    [1,1,1,1,1,1,1,1,1,1],
    [0],
];

const expectedReturn = [5,4,1,4,1,2,2,1,2,1];

let passesTests = true;

// inputs.forEach((array, index) => {
//     if(findMissing(array, array.length) !== expectedReturn[index]) {
//         passesTests = false;
//     }
// });



inputs.forEach((array, index) => {
    if(findSmallestGap(array) !== expectedReturn[index]) {
        passesTests = false;
    }
});
console.log('passes tests', passesTests);
