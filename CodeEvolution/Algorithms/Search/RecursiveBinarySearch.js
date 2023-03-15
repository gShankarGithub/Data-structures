//Recursive Binary Search

function recursiveBinarySearch(arr, target, start=0 , end = arr.length-1) {
        if(start>end) return -1
        let mid = Math.floor((start + end) / 2) 
        if(arr[mid]===target) return mid
        if(arr[mid]>target) return recursiveBinarySearch(arr,target,start,mid-1)
        else return recursiveBinarySearch(arr,target,mid+1,end)
}

let array = [1,2,3,4,5,6,7,8]
console.log(recursiveBinarySearch(array,5));

// Big 0 is O(logn)