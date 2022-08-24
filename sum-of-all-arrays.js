/*
given two arrays
create a new array with the sum at each index

example 
[1,2,3,4]
[5,6,7,8]
outputs
[6,8,10,12]
*/

const arrayA = [ 1, 2, 3, 4,20];
const arrayB = [ 5, 6, 7, 8,10,15];
const arrayC = [10,12,14,16,18,20,40];
const arrayD = [ 1, 2, 4, 6, 8];

const sumOfArrays = (A, B) => {
    const longestLength = Math.max(A.length, B.length);

    const sumArray = [];
    
    for(let i = 0; i < longestLength; i++) {
        const sum = (A[i] ?? 0) + (B[i] ?? 0);
        sumArray.push(sum);
    }
    return sumArray;
};

// const output = sumOfArrays(arrayA, arrayB);
// console.log('output', output);

const sumOfAllArrays = (arrays) => {
    const sumArray = [];
    const arraysLength = arrays.length;

    let longestArrayLength = 0;

    arrays.forEach((array) => {
        if(array.length > longestArrayLength) {
            longestArrayLength = array.length;
        }
    });

    // console.log('longest', longestArrayLength);

    for(let i = 0; i < arrays.length; i++) {
        // console.log(arrays[i]);

        for(let j = 0; j < arrays[i].length; j++) {
            // console.log(arrays[i][j]);

            sumArray[j] = (sumArray[j] ?? 0) + arrays[i][j];
        }
    }

    return sumArray;
}

const sums = sumOfAllArrays([arrayA, arrayB, arrayC, arrayD]);
console.log('sums', sums);