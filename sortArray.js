function ascSortArray(array) {
    // sort array in ascending order
    array.sort((a, b) => {
        console.log('sort');
        return(a - b);
    });
    return(array);
};

function descSortArray(array) {
    array.sort((a, b) => {
        return(b - a);
    });
    return(array);
}

const testArray = [4,3,42,2,1,19,8,4,6,13];

const ascSortedArray = ascSortArray(testArray);
//console.log(ascSortedArray);

const descSortedArray = descSortArray(testArray);
console.log(descSortedArray);