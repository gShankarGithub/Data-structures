function insertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let num = arr[i]
        j = i - 1
        while (j >= 0 && arr[j]>num) {
            arr[j+1] = arr[j]
            j= j-1
        }
        arr[j+1] = num
    }
}

let array = [-6,10,-21,55,12,22]
console.log(array)
insertionSort(array)
console.log(array)