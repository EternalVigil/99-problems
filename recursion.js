function doubleUp(number, limit) {
    console.log('-----------------');
    console.log(number);
    if(number < limit && number + number < limit) {
        console.log('time to double');
        number = number + number;
        console.log('new number');
        console.log(number);
        doubleUp(number, limit);
    } else {
        console.log('limit exceeded');
    }
}

const x = 1;
const upperLimit = 50;

doubleUp(x, upperLimit);