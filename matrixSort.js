function sortArray(array) {
    console.log(array);
    array.sort((a, b) => {
        return(a[0] - b[0])
    });
    console.log(array);
}

const array = [
    [12, 'AAA'],
    [58, 'BBB'],
    [28, 'CCC'],
    [18, 'DDD']
];

sortArray(array);