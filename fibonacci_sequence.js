var fibonacci = function (n) {
    if (n <= 1) return [0, 1];
    var arr = fibonacci(n - 1);
    return arr.concat([arr[n - 2] + arr[n - 1]]);
};

console.log(fibonacci(400));