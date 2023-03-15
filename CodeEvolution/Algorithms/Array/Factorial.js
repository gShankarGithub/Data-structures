// Factorial
//Note. Factorial of 0 is 1
const no = 3
function factorial(num) {
    let fact = 1
    if (num == 0) {
        return 1
    }
    else {
        for (let i = num; i > 0; i--) {
            fact = fact * i
        }
        return fact
    }
}

console.log(factorial(no))

function factorialM2(num) {
    let result = 1
    for (let i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}

console.log(factorialM2(no))