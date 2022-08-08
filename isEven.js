const evenCheck = (number) => {
    if(typeof number !== 'number') {
        return false;
    }
    if( ((number % 2) === 0) && ((number % 1) === 0)) {
        return true;
    } else {
        return false;
    }
};

const oddCheck = (number) => {
    if(typeof number !== 'number') {
        return false;
    }

    if( ((number % 2) !== 0) && ((number % 1) === 0)) {
        return true;
    } else {
        return false;
    }
};

console.log( evenCheck(11) );
console.log( oddCheck(11) );