// Binary Search


function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return mid
        if (arr[mid] > target) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(binarySearch(array, 8));

//Time Complexity is o(n)