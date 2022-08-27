const note = 'aar';
const library = 'aab';

const noteBits = note.split('');
const libraryBits = library.split('');

const libraryHash = {};

libraryBits.forEach((letter) => {
    if(!libraryHash[letter]) {
        libraryHash[letter] = 0;
    }

    libraryHash[letter] += 1;
});

let possibleMatch = true;

for(let i = 0; i < noteBits.length; i++) {
    const desiredLetter = noteBits[i];

    if(!libraryHash[desiredLetter]) {
        possibleMatch = false;
        break;
    } else {
        libraryHash[desiredLetter] -= 1;
    }
}
