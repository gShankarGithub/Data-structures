// Insertion Sort 

function InsertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}



// BigO = Quadratic o(n^2)