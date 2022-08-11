// flatten the array given certain inputs

const input = [1,2,3,4];
const input2 = [1,2,3,[4]];
const input3 = [1,2,3,4,[5,6,7,[8,9,[10,11]]]];



const ezflatMap = (array, mapFn) => {
    const newArray = array.flat(Infinity);
    return newArray;
};

const flatMap = (array, mapFn) => {
    const newArray = [];

    const helper = (array) => {
        for(let i = 0; i < array.length; i++) {
            const element = array[i];
    
            if(typeof element === 'number') {
                newArray.push(element);
            } else {
                helper(element);
            }
        }
    };    

    array.forEach((entry) => {
        if(typeof entry === 'number') {
            newArray.push(entry);
        } else {
            helper(entry);
        }
    });

    return newArray;
    
};

const output = flatMap(input);
console.log('output', output);

const output2 = flatMap(input2);
console.log('output 2', output2);

const output3 = flatMap(input3);
console.log('output 3', output3);