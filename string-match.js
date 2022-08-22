/*

given a string paragraph and an input string
find all the instances of the input string within the given paragraph
and output the paragraph with all the matches bracketed
matches must be case-sensitive

example 
given
This is the best version of the thing I love 
and nothing could ever hope to replace it
I hope that this thing will stay with me forever
despite the slow march of time

input 
the
*/

const given = 'This is the best version of the thing I love and nothing could ever hope to replace it.  I hope that this thing will stay with me forever, despite the slow march of time';

const input = 'the';
const inputLength = input.length;

const regexExp = new RegExp(input, 'g');

const splitGiven = [];
let currentIndex = 0;

[...given.matchAll(regexExp)].map((entry) => {
    const preMatch = given.slice(currentIndex, entry.index);
    splitGiven.push(preMatch);

    const match = given.slice(entry.index, entry.index + inputLength);
    splitGiven.push(`[${match}]`);

    currentIndex = entry.index + inputLength;
});
splitGiven.push(given.slice(currentIndex));


const newGiven = splitGiven.join('');
console.log('given:', given);
console.log('============================================');
console.log('new:', newGiven);