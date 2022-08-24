/*
given a word dictionary
see if a certain word can be segmented into two strings
*/

const dictionary = ['apple', 'pie', 'pear', 'bear'];

const input ='applepearbearbearbearpieapple';

const checkString = (input) => {

    let copy = input.slice();

    let canBeSplit = true;
    let cycles = 0;

    const splits = new Set();

    while(copy.length && canBeSplit) {

        dictionary.forEach((word) => {
            const regex = new RegExp(word, 'g');
            const matches = [...copy.matchAll(regex)];

            matches.reverse().forEach((match) => {
                // console.log('match', match);
                splits.add(word);
                const first = copy.slice(0, match.index);
                const second = copy.slice(match.index + word.length);
                // console.log('strings', first, second);
                copy = `${first}${second}`;
                // console.log('copy', copy);
            });

        });

        if(copy.length) {
            canBeSplit = false;
        }
    }

    console.log('splits', splits);
    console.log('leftovers', copy);
    return canBeSplit;
};

const canSplit = checkString(input);
console.log('can split', canSplit);
