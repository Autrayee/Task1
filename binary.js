

const binSearch = (arr, key) => {
    if (!Array.isArray(arr) || typeof key !== "number")
        throw new Error("Invalid input");
    const sortedArray = [...arr].sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++)
        if (arr[i] !== sortedArray[i]) throw new Error("Array must be sorted");

    let lower = 0;
    let upper = arr.length;

    while (lower <= upper) {
        const middle = lower + Math.floor((upper - lower) / 2);
        if (key === arr[middle]) return middle + 1;
        if (key > arr[middle]) lower = middle + 1;
        else upper = middle - 1;
    }
    return -1;
};

//console.log(binSearch([1,3,4,5,6],6));
module.exports = binSearch;