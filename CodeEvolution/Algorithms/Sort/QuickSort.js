// Quick sort 


function quickSort(arr) {
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if(pivot>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let array = [-6,10,-21,55,12,22]
console.log(array)
console.log(quickSort(array));


// Bigo notation is 0(n^2)
// But its average time complexity is a o(nlogn)