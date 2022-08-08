// Rotate the matrix clockwise
const inputMatrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
];

const squareMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

const expectedTransformedSquareMatrix = [
    [9,6,3],
    [8,5,2],
    [7,4,1],
];

const expectedFlipResult = [
    [9,10,11,12],
    [5,6,7,8],
    [1,2,3,4],
];


const expectedMirrorResult = [
    [4,3,2,1],
    [8,7,6,5],
    [12,11,10,9],
];

const expectedCounterClockwiseResult = [
    [4,8,12],
    [3,7,11],
    [2,6,10],
    [1,5,9],
];

const expectedClockwiseResult = [
    [9,5,1],
    [10,6,2],
    [11,7,3],
    [12,8,4],
];

// Clockwise Rotation
const clockwiseResult = [];
for(let i = 0; i < inputMatrix.length; i++) {

    for(let j = 0; j < inputMatrix[i].length; j++) {
        if(!clockwiseResult[j]) {
            clockwiseResult.push([]);
        }

        clockwiseResult[j].unshift(inputMatrix[i][j]);
    }

}
// console.log('clockwise matrix', clockwiseResult);

let clockwiseMatch = true;
for(let i = 0; i < clockwiseResult.length; i++) {
    for(let j = 0; j < clockwiseResult[i].length; j++) {
        if(clockwiseResult[i][j] !== expectedClockwiseResult[i][j]) {
            clockwiseMatch = false;
            break;
        }
    }
}
// console.log('clockwise match:', clockwiseMatch);

const counterClockwiseResult = [];
for(let i = 0; i < inputMatrix.length; i++) {
    for(let j = 0; j < inputMatrix[i].length; j++) {
        if(!counterClockwiseResult[j]) {
            counterClockwiseResult.push([]);
        }
        counterClockwiseResult[j].push(inputMatrix[i][inputMatrix[i].length - (j + 1)]);
    }
}
// console.log('counter clockwise result', counterClockwiseResult);

const mirrorResult = [];
for(let i = 0; i < inputMatrix.length; i++) {
    mirrorResult.push([...inputMatrix[i]].reverse());
}
// console.log('mirror result', mirrorResult);

let mirrorMatch = true;
for(let i = 0; i < inputMatrix.length; i++) {
    for(let j = 0; j < inputMatrix[i].length; j++) {
        if(mirrorResult[i][j] !== expectedMirrorResult[i][j]) {
            mirrorMatch = false;
            break;
        }
    }
} 
// console.log('is mirrored', mirrorMatch);

const flippedResult = [...inputMatrix].reverse();

let flippedMatch = true;
for(let i = 0; i < inputMatrix.length; i++) {
    for(let j = 0; j < inputMatrix[i].length; j++) {
        if(flippedResult[i][j] !== expectedFlipResult[i][j]) {
            flippedMatch = false;
        }
    }
}
// console.log('flip match', flippedMatch);

const transformedSquareMatrix = [];

for(let i = 0; i < squareMatrix.length; i++) {

    for(let j = 0; j < squareMatrix[i].length; j++) {
        if(!transformedSquareMatrix[j]) {
            transformedSquareMatrix.push([]);
        }

        const desiredRow = squareMatrix.length - (j + 1);
        const desiredColumn = squareMatrix.length - (i + 1);
        transformedSquareMatrix[j].push( squareMatrix[desiredColumn][desiredRow] );
    }

}

const transverseResult = [];

for(let i = 0; i < inputMatrix.length; i++) {

    for(let j = 0; j < inputMatrix[i].length; j++) {
        if(!transverseResult[j]) {
            transverseResult.push([]);
        }

        transverseResult[j].push( inputMatrix[i][j] );
    }

}
// console.log('transverse', transverseResult);