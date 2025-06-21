const add = (a, b) => {
    return a + b;
}

const PI = 3.14159;

const square = (x) => {
    return x * x;
}

// // module.exports.add = add;
// // module.exports.PI = PI;
// // module.exports.square = square;

exports.add = add;
exports.PI = PI;
exports.square = square;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// };

// module.exports = math;

