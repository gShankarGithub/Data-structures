function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leastNum = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[leastNum] > arr[j]) {
                leastNum = j
            }
        }
        if (leastNum !== i) {
            [arr[i],arr[leastNum]] = [arr[leastNum],arr[i]]
        }
    }
    return arr
}

let array = [-6, 10, -21, 55, 12, 22]

console.log("Selection Sort");
console.log(selectionSort(array))