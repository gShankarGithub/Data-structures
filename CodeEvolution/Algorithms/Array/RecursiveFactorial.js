//Factorial 

function recursiveFact(num){
    if(num===0){
        return 1 
    }
    return num * recursiveFact(num -1)
}

console.log(recursiveFact(3));

// Linear by complexity o(n)