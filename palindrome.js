const sampleWord = 'reviver';
console.log('the word is:', sampleWord);

let isPalindrome = true;
for(let i = 0; i < (sampleWord.length / 2) - 1; i++) {
    const mirrorIndex = sampleWord.length - (i + 1);

    if(sampleWord[i].toLowerCase() !== sampleWord[mirrorIndex].toLowerCase()) {
        isPalindrome = false;
        break;
    }
}

console.log('is palindrome', isPalindrome);