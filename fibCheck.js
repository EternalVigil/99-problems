function createFibArray(number) {
    /* creates fibonacci array that is less than or equal to the input number */
    let fibArray = [];

    for(let i = 0; i <= number; i++) {
        //console.log(i);
        if(i === 0) {
            fibArray.push(0);
        }
        else if(i === 1) {
            fibArray.push(1);
        } else {
            const fibResult = fibArray[i - 1] + fibArray[i - 2];
            if(fibResult <= number) {
                fibArray.push(fibArray[i-1] + fibArray[i-2]);
            }
        }
    }
    return fibArray;
};

function printReverseArray(array) {
    /*
    for(let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
    */
   console.log(array.reverse());
}

const number = 55;
const fibArray = createFibArray(number);
printReverseArray(fibArray);
const finalIndexValue = fibArray[fibArray.length - 1];

if (finalIndexValue !== number) {
    console.log('not fibbing');
} else if (finalIndexValue === number) {
    console.log('is fibbing');
} else {
    console.log('uhhhhhhh...');
}

