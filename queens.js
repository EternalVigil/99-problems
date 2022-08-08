function createSquareBoard(x) {
    let number = 1;
    let outerArray = [];
    for(let i = 0; i < x; i++) {
        let innerArray = [];
        for(let j = 0; j < x; j++) {
            innerArray.push(number);
            number++;
        }
        outerArray.push(innerArray);
    }
    console.log(outerArray);
    return outerArray;
}

function checkRow(x) {
    let counter = 0;
    for(let i = 0; i < board[x].length; i++) {
        console.log(board[x][i]);
        if(board[x][i] === 'Q') {
            counter++;

            if(counter > 1) {
                return false;
            }
        }
    }

    if(counter === 1) {
        return true;
    } else return false;
}

function checkColumn(y) {
    let counter = 0;
    for(let i = 0; i < board.length; i++) {
        console.log(board[i][y]);
        if(board[i][y] === 'Q') {
            counter++;

            if(counter > 1) {
                return false;
            }
        }
    }
    if (counter === 1) {
        return true;
    } else return false;

}

function checkDiagonal(x, y) {
    // upper left diagonal
    /*
    console.log('up and left');
    for(let i = x; i >= 0; i--) {
        console.log(board[x-i][y-i]);
    }
    */

    console.log('up and right');
    for(let i = x; i >= 0; i--) {
        console.log(board[x-i][y+i]);
    }
    /*
    console.log('down and left');
    for(let i = x; i >= 0; i--) {
        console.log(board[x+i][y-i]);
    }

    console.log('down and right');
    for(let i = 0; i < board.length-1; i++) {
        console.log(board[x+i][y+i]);
    }
    */
}

const board = createSquareBoard(5);
// console.log(checkRow(0));
// console.log(checkColumn(1));
// console.log(board[7][6]);
checkDiagonal(4,4);