export const cells = new Array();

let element = new Object();
for (let i = 0; i < 9; i++) {
    element = {
        id: i,
        memo: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    cells.push(element);
}
console.log(cells);

export const bigCells = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 0,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
    {
        id: 9,
    }
];