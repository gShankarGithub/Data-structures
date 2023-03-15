const array = [1, 2, 3, 4, 5, 6, 7]

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===target){
            return i
        }
    }
    return -1
}

console.log(linearSearch(array,5))


function binarySearch(arr, target){
    let start = 0
    let end = arr.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]===target) return mid
        else if(arr[mid]>target){
            end = mid -1
        }else{
            start = mid + 1
        }
    }
    return -1 
}

console.log(binarySearch(array,6));

function binarySearchRecursion(arr, target ,start=0,end=arr.length-1){
    if(start>end) return -1
    let mid= Math.floor((start+end)/2)
    if(arr[mid]===target) return mid
    if(arr[mid]<target) return binarySearchRecursion(arr,target,mid+1,end)
    if(arr[mid]>target) return binarySearchRecursion(arr,target,start,mid-1)

    
    
}
console.log(binarySearchRecursion(array,6));