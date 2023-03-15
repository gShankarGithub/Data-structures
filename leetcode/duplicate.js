// Check if the array has any duplicate values


const arr = [1,2,3,4,5]

function duplicateValues(arr){
    const s = new Set(arr)
    console.log(s)
   if(arr.length===s.size){ //Need to use s.size to find lenght in set
    return false
   }else{
    return true
   }
    
}


console.log(duplicateValues(arr));