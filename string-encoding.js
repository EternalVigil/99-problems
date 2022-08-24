/*

given a string of characters
transfer to an encoding string

example
aaaabbccc
4a2b3c
*/

const input = 'aaaabbcccabbfffffffqq';

let currentChar = '';
let currentCount = 0;

const encodingArray = [];

for(let i = 0; i < input.length; i++) {
    const letter = input[i];

    if(!currentChar) {
        currentChar = letter;
        currentCount += 1;
    } else {
        if(currentChar === letter) {
            // console.log('match', currentCount, currentChar);
            currentCount += 1;
        } else {
            // console.log('mismatch', currentCount, currentChar);
            encodingArray.push(`${currentCount}${currentChar}`);
            currentCount = 1;
            currentChar = letter;
        }
    }
}
encodingArray.push(`${currentCount}${currentChar}`);
console.log('encoding array', encodingArray);
console.log('encoding join', encodingArray.join(''));