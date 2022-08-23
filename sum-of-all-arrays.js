/*
given two arrays
create a new array with the sum at each index

example 
[1,2,3,4]
[5,6,7,8]
outputs
[6,8,10,12]
*/

const arrayA = [1,2,3,4,20];
const arrayB = [5,6,7,8,10,15];

const sumOfArrays = (A, B) => {
    const longestLength = Math.max(A.length, B.length);

    const sumArray = [];
    
    for(let i = 0; i < longestLength; i++) {
        const sum = (A[i] ?? 0) + (B[i] ?? 0);
        sumArray.push(sum);
    }
    return sumArray;
};

const output = sumOfArrays(arrayA, arrayB);
console.log('output', output);