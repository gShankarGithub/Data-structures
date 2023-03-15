// 2 Sums leetcode


let array =[2,7,11,15], target = 9

function twoSums(arr,tar){
    let map = new Map()
    for(let i=0; i<arr.length;i++){

        let diff = target - arr[i]
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(arr[i],i)
    }
}

console.log("2 Positions are "+twoSums(array,target));