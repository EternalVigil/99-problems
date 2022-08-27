/*
dictionary with wild card

should have a dictionary defined as an array ['cat', 'man', 'world']
create a function that would check if there is a match of an input word against the dictionary

step 2
allow for dictionary to have a wild card ['*at']
would allow matches for bat, cat, mat, etc...
*/

const dictionary = ['cat', 'man', 'world'];

const wordSet = new Set(dictionary);

const input = '*a*ld';
// const input = 'guitar';

const findMatch = (inputWord) => {
    console.log('wordSet', wordSet);
    console.log('word', inputWord);


    // put in check for wildcard - fall back to set use if none detected
    let regex = /(\*)/g;

    const wildCardIndexs = [...inputWord.matchAll(regex)];
    // console.log('wild card indexes', wildCardIndexs, wildCardIndexs.length);
    const wordArray = Array.from(wordSet);


    let hasMatch = false;

    if(wildCardIndexs.length === 0) {
        hasMatch = wordSet.has(inputWord);
        console.log('has match', hasMatch);
        return;
    }



    const match = wordArray.find((word) => {
        let temp = inputWord;
        // console.log('word', word, word.length);

        wildCardIndexs.forEach((entry) => {
            // console.log('entry', entry);
            // console.log(word.length, typeof word.length);

            if(word[entry.index]) {
                const replacementLetter = word[entry.index];
                temp[entry.index] = replacementLetter;
                // console.log('replacement', replacementLetter);

                let substrings;
                let first;
                let second;

                if(entry.index === 0) {
                    substrings = [temp.slice(0, entry.index + 1), temp.slice(entry.index + 1)];
                    [first, second] = substrings;
                    first = word.charAt(entry.index);
                } else if(entry.index === inputWord.length - 1) {
                    substrings = [temp.slice(0, entry.index), temp.slice(inputWord.length - 1)];
                    [first, second] = substrings;
                    second = word.charAt(entry.index);

                } else {
                    substrings = [temp.slice(0, entry.index), temp.slice(entry.index + 1)];
                    [first, second] = substrings;
                    second = `${word.charAt(entry.index)}${second}`
                }

                // console.log('substrings', substrings, first, second);
                const combined = [first, second].join('');
                temp = combined;
                const match = wordSet.has(temp);

                // console.log('match', match);
                if(match) hasMatch = true;

            }

        });

    });
    console.log('hasMatch', hasMatch);
};

findMatch(input);