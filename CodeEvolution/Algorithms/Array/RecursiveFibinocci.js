const num = 10

function Fib(n) {
    if (n < 2) {
        return n
    }
    return Fib(n - 1) + Fib(n - 2)
}

console.log(Fib(num))

// Time complexity is 0(2^n) not a good way to solve fibinocci series problem