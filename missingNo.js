/*
given an array of numbers from 1 - n
find the missing value from the array


example
[1,3,5,2]
is missing 4

*/
const input = [1,4,5,2];

const intendedLength = input.length + 1;

let runningTotal = 0;

input.forEach((element) => {
    runningTotal += element;
});

const expectedSum = Math.floor(intendedLength * (intendedLength + 1) / 2);
const missing = expectedSum - runningTotal;
console.log('input', input);
console.log('missing', missing);