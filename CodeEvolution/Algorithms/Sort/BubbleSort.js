//Bubble Sort
function BubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}
let array = [-6,10,-21,55,12,22]
console.log(array)
BubbleSort(array)
console.log(array)

// BigO = O(n^2)