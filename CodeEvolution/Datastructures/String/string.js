//reverse string

let str = "super"
let res = ''

function reverseString(st) {
    const splitt = st.split("")
    for (let i = splitt.length - 1; i >= 0; i--) {
        res += splitt[i]
    }
}
reverseString(str)
console.log(res)

let pal = "malaxyxlam"

function palindrome(pal) {
    let m = pal.length
    let l = m / 2
    let res;
    let i = 0
    if (pal.length % 2 == 0) {
        return -1
    }
    else {
        while (i < 1) {
            if (pal[i] != pal[m - i - 1]) {
                return "not"
            }
            i++
        }
        return "it is a palindrome"
    }
}

console.log(palindrome(pal));


let word = "malayalam"
function pali(str) {
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] != str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

console.log(pali(word));