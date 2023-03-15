const arr = [1,2,3,"Vishwas"]

for(item of arr){
    console.log(item)
}
console.log(arr)

arr.unshift("First")
console.log(arr)
arr.pop()
console.log(arr)
arr.push("Ready")
console.log(arr)
arr.shift()
console.log(arr)

arr.filter((fil)=>{
    if(fil==="Ready"){
        console.log(fil)
    }
})
arr.shift("OOyeha")
arr.map((item)=>{
    console.log(item)
})