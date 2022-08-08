const array = [1,2,3,4,2,2,6,4,-4,13,-4];

const toMap = {};
/*
const filteredArray = array.filter((e, i, a) => {
    console.log(e);
    console.log(i);
    console.log(a);
    return(a.indexOf(e) === 1);
});
console.log(filteredArray);
*/

array.forEach(entry => {
    console.log(entry);
    if(!toMap[entry]) {
        toMap[entry] = { count: 0 };
    }
    toMap[entry].count++;
    
});
console.log(toMap);

const noDups = Object.entries(toMap).filter((entry) => {
    return(entry[1].count > 1);
});
console.log(noDups);
