/*

Given a point in a matrix
see if you can reach a given destination point
is less or equal to a given number of moves

S = start
F = finish

Map 1
3 moves allowed
[
    [[S], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [F]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [ ]]
]

Map 2
5 moves
[
    [[S], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [ ], [ ]]
    [[ ], [F], [ ]]
]

*/

// creating the map

const matrixHeight = 6;
const matrixWidth = 3;

const startingPoint = [0,0];
const endingPoint = [5,2];

let currentPosition = startingPoint;

const maxMoves = 50;

const map = [];

for(let i = 0; i < matrixHeight; i++) {
    const row = [];

    for(let j = 0; j < matrixWidth; j++) {
        if(startingPoint[0] === i && startingPoint[1] === j) {
            row.push('S');
        } else if (endingPoint[0] === i && endingPoint[1] === j) {
            row.push('F');
        } else {
            row.push(' ');
        }
    }

    map.push(row);
}
console.log(map);

let stepCount = 0;

while(
    (currentPosition[0] !== endingPoint[0] || 
    currentPosition[1] !== endingPoint[1]) && stepCount < maxMoves
) {
    console.log('=================================');
    console.log('current step count', stepCount);
    console.log('current position', currentPosition);

    const columnShift = endingPoint[1] - currentPosition[1];
    // console.log('column shift', columnShift);

    let columnMove = 0;
    if(columnShift > 0) {
        columnMove = 1;
    } else if(columnShift < 0) {
        columnMove = -1;
    }
    console.log('column move', columnMove);

    const rowShift = endingPoint[0] - currentPosition[0];
    // console.log('row shift', rowShift);

    let rowMove = 0;
    if(rowShift > 0) {
        rowMove = 1;
    } else if (rowShift < 0) {
        rowMove = -1;
    }
    console.log('row move', rowMove);

    currentPosition = [currentPosition[0] + rowMove, currentPosition[1] + columnMove];

    
    stepCount += 1;
}

console.log('=============================');
console.log('final step count', stepCount);
console.log('current:', currentPosition, 'final:', endingPoint);