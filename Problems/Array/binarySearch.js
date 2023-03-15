const array = [1, 2, 3, 4, 5, 6, 7]

//Normal
function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(arr[mid]===target) return mid
        else if(arr[mid]>target){
            end = mid - 1
        }else { 
            start = mid + 1
        }
    }
    return -1
}

console.log(binarySearch(array,6))

//Using Recursive Method

function binarySearchRecursive(arr,target,start=0,end=arr.length-1){
    if(start>end) return -1
    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target) return mid
    if(arr[mid]>target){
       return binarySearchRecursive(arr,target,start,mid-1)
    }
    else{
        return binarySearchRecursive(arr,target,mid+1,end)
    }
}


console.log(binarySearchRecursive(array,2))