const nums = [2,7,11,15];
const target = 9;

const numMap = {};

const values = [];

for(let i = 0; i < nums.length; i++) {
    const number = nums[i];

    const diff = target - number;

    console.log('numbers', number, diff);
    console.log('numMap', numMap);
    console.log('numMap', numMap[diff]);

    if(numMap[diff] !== undefined) {
        values.push(i, numMap[diff]);
        break;
    }

    if(!numMap[number]) {
        numMap[number] = i;
    }
}

nums.forEach((number) => {
    const diff = target - number;
    if(numMap[diff]) {
        match = true;
    }

    if(!numMap[number]) {
        numMap[number] = 1;
    }

});
console.log('values', values);
return values;
