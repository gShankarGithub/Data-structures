// Linear Search


function LinearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target){
            return i
        }
    }
    return -1
}

let array = [1,2,3,4,5,6,7]

console.log(LinearSearch(array,5))


//Big O is linear time complexity 