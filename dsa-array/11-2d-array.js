function array(input) {
    let rows = [];
    let columns = [];

    for(let i = 0; i < input.length; i++) {
        for(let j = 0; j < input[i].length; j++) {
            if(input[i][j] === 0) {
                rows.push(i);
                columns.push(j);
            };
        };
    };

    for(let row in input) {
        for (let column in input[row]) {
            if(rows.includes(Number(row)) || columns.includes(Number(column))) {
                input[row][column] = 0;
            };
        };
    };

    return input;
};

let input = [[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1]];

console.log(array(input));

