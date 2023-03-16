// Reverse Array 

const arr = [1,3,4,5,6,5]

const reverse = arr.reverse()
console.log(reverse);
console.log(arr)

//Without a new array

for(i = arr.length-1; i>=0; i--){
    console.log(arr[i])
}

//Reverse first and last element

function reverseLF(rev){
    let temp = rev[0]
    rev[0] = rev[rev.length-1]
    rev[rev.length-1] = temp

    console.log(rev)
}

reverseLF(arr)