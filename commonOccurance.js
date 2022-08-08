// For a given string, 
// find the most commonly occuring letter(s) and print them out
// case sensitive

const sampleText = 'AaabbccAAddee';

let highestCount = 0;
let letterArray = [];
const letterMap = {};

for(let i = 0; i < sampleText.length; i++) {
    const currentLetter = sampleText.charAt(i);
    if(!letterMap[currentLetter]) {
        letterMap[currentLetter] = { count: 0 };
    }

    letterMap[currentLetter].count = letterMap[currentLetter].count + 1;
    if(letterMap[currentLetter].count > highestCount) {
        highestCount = letterMap[currentLetter].count;
        letterArray = [];
        letterArray.push(currentLetter);

    } else if (letterMap[currentLetter].count === highestCount) {
        letterArray.push(currentLetter);
    }
}

console.log("highest occurring letters:", letterArray, highestCount);
