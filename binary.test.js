const binSearch = require("./binarySearch");

test("should return index of element in array", () => {
    expect(binSearch([15, 20, 34, 44, 55, 66, 77, 88, 99], 55)).toBe(5);
});

test("should return -1", () => {
    expect(binSearch([15, 20, 34, 44, 55, 66, 77, 88, 99], 555)).toBe(-1);
});

test("should give Error when A is not an array", () => {
    expect(() => {
        binSearch(30, 6);
    }).toThrowError("Invalid input");
});

test("should give an Error", () => {
    expect(() => {
        binSearch([1, 2, 3, 4, 5], null);
    }).toThrowError("Invalid input");
});

test("should give an Error when array is not sorted", () => {
    expect(() => {
        binSearch([1, 12, 3, 4, 5], 5);
    }).toThrowError("Array must be sorted");
});
