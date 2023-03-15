// Group Anagram
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagram = (str) => {
    let map = new Map()
    for (st of str) {
        const curr = [...st].sort().join("")
        console.log(curr)
        if(!map.has(curr)) map.set(curr,[])
        map.get(curr).push(st)
    }
    return Array.from(map.values())

}

console.log(groupAnagram(strs));