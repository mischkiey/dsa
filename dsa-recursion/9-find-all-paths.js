function findAllPaths(array, m = 0, n = 0, path = '') {
    if(array[m][n] === 'e') {
        console.table(array)
        console.log(`Path to the exit: ${path}`);
        // return;
    };

    if(array[m][n] === ' ') {
        array[m][n] = 'x';
    };

    if(n+1 < array[m].length && (array[m][n+1] === ' ' || array[m][n+1] === 'e')) {
        let right = path + 'R';
        findAllPaths(array, m, n+1, right);
    };

    if(m+1 < array.length && (array[m+1][n] === ' ' || array[m+1][n] === 'e')) {
        // What a
        let down = path + 'D';
        findAllPaths(array, m+1, n, down);
    };

    if(n-1 >= 0 && (array[m][n-1] === ' ' || array[m][n-1] === 'e')) {
        let left = path + 'L';
        findAllPaths(array, m, n-1, left);
    };

    if(m-1 >= 0 && (array[m-1][n] === ' ' || array[m-1][n] === 'e')) {
        let up = path + 'U';
        console.table(array)
        console.log(m, n)
        findAllPaths(array, m-1, n, up);
    };

    // // Left
    // if(n-1 >=0 && (array[m][n-1] === 'x' || array[m][n-1] === 'e')) {
    //     findAllPaths(array, m, n-1, path.slice(0, path.length-1));
    // };

    // // Up
    // if(m-1 >=0 && (array[m-1][n] === 'x' || array[m-1][n] === 'e')) {
    //     findAllPaths(array, m-1, n, path.slice(0, path.length-1));
    // };

    // // Right
    // if(n+1 < array[m].length && (array[m][n+1] === 'x' || array[m][n+1] === 'e')) {
    //     findAllPaths(array, m, n+1, path.slice(0, path.length-1));
    // };

    // // Down
    // if(m+1 < array.length && (array[m+1][n] === 'x' || array[m+1][n] === 'e')) {
    //     findAllPaths(array, m+1, n, path.slice(0, path.length-1));
    // };
    
};

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];


let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


console.log(findAllPaths(maze));