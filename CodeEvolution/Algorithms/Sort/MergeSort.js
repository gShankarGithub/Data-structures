//Merge Sort 

function mergeSort(arr) {
    if(arr.length<2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}


function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]){
            sortedArr.push(leftArr.shift(0))
        }else{
            sortedArr.push(rightArr.shift(0))
        }
    }
        return [...sortedArr,...leftArr,...rightArr]

}

let array = [-6,10,-21,55,12,22]
console.log(array)

console.log(mergeSort(array))

//BigO nota n(logn)