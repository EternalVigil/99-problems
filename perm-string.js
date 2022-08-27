const input = 'abc';

const perms = new Set();

const getPermutations = (input) => {
    const permutations = [];

    if(input.length < 2) return input;

    for(let i = 0; i < input.length; i++) {
        console.log('=====================');
        console.log('i', i);

        const letter = input[i];
        console.log('letter', letter);

        if(input.indexOf(letter) !== i) continue;

        const remaining = input.slice(0, i) + input.slice(i + 1);
        console.log('remaining', remaining);

        for( let perm of getPermutations(remaining)) {
            console.log('perm', perm);
            permutations.push(letter + perm);
            console.log('permuations', permutations);
        }

        console.log('=======================');

    };

    return permutations;
};


const output = getPermutations(input);
console.log('output', output);