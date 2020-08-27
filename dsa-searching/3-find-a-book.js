function findABook (array, value, start = 0, end = array.length) {
    if (start > end) {
        return 'Book not found';
    };

    const i = Math.floor((start + end)/2);

    if (value === array[i]) {
        return array[i];
    };

    if (value < array[i]) {
        return findABook(array, value, start, end = i-1);
    };

    if (value > array[i]) {
        return findABook(array, value, start = i+1, end);
    };
};

console.log(findABook([0, 1, 2, 3, 4], 1)); // 1