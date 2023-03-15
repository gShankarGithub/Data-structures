const map = new Map([['a',2],['b',3]])

map.set("c", 5)

map.delete('c')
console.log(map.has('b'))
map.clear()

for(const [key,value] of map){
  console.log(`${key}: ${value}`)
}