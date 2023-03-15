// Fibinocci Series

const num = 10;

function fibinocii(num) {
    const fib = [0, 1]
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}

console.log(fibinocii(num))

// BigO is linear Time complexity
