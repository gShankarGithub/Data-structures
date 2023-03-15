// Check if the number given is a power of 2


const num = 8

function powerOfTwo(n){
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 != 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(num));

// Time complexity is o(n)