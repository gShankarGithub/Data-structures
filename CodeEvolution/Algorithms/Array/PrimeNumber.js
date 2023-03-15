// Prime Number 
// Prime number is natural number which is greater than 1 but not a product of 2 smaller natural numbers


const no = 27

function primeNumber(num) {
    if (num < 2) {
        return false
    } else {
        for (let i = 2; i <= num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

console.log(primeNumber(no));


function primeNumberM2(num) {
    if (num < 2) {
        return false
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

console.log(primeNumberM2(no));