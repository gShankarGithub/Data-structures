function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const sortArr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortArr.push(left.shift(0))
        } else {
            sortArr.push(right.shift(0))
        }
    }
    return [...sortArr,...left,...right]
}

let array = [-6, 10, -21, 55, 12, 22]
console.log(array)

console.log(mergeSort(array))