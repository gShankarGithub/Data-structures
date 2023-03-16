//Binary Search Recursive Method

const array = [1, 2, 3, 4, 5, 6, 7]

function binarySearchRecursive(arr,target,start=0,end=arr.length-1){
    if(start>end) return -1
    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target) return mid
    if(arr[mid]>target) {return binarySearchRecursive(arr,target,start,mid-1)}
    else{ return binarySearchRecursive(arr,target,mid+1,end)}
}

console.log(binarySearchRecursive(array,5))


//Factorial Recursive

function factorial(n){
    if (n==0) return 1
    return n * factorial(n-1)
}
console.log(factorial(2))


//Fibanocci
// Basically 1,1,2,3,5,8 . . .. . . .

function fibino(n){
    if(n===0) return 0
    if(n===1) return 1
    return fibino(n-1) + fibino(n-2)
}

console.log(fibino(6));