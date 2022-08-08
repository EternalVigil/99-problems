function ascSortAge(array) {
    array.sort((a, b) => {
        return(a.age - b.age);
    });
    return(array);
};

function descSortAge(array) {
    array.sort((a, b) => {
        return(b.age - a.age);
    });
    return(array);
}

const testArray = [
    {
        name: "James",
        age: 10
    },
    {
        name: "Harry",
        age: 6
    },
    {
        name: "George",
        age: 11
    }
];

const ascSortedArray = ascSortAge(testArray);
//console.log(ascSortedArray);

const descSortedArray = descSortAge(testArray);
console.log(descSortedArray);