class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(1)
        }
        return total % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [[key, value]]
        } else {
            const sameKey = bucket.find((item) => item[0] === key)
            if (sameKey) {
                sameKey[1] = value
            } else {
                this.table[index].push([key, value])
            }
        }
    }

    get(key) {
        let index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            const key = bucket.find((item) => item[0] === key)
            if (key) {
                return key
            }
        }
        return undefined
    }

    remove(key) {
        let index = this.hash(key)
        const bucket = this.table[index]
        if (bucket) {
            let key = bucket.find((item)=item[0]===key)
            if(key){
                this.table[index].splice(bucket.indexOf(key),1)
            }
        }
        return undefined
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {

                console.log(i, this.table[i]);
            }
        }
    }
}


const hash = new HashTable(5)

hash.set("name", "Gokul")
hash.set("dfdddd", "abbas")
hash.set("mane", "gouhtam")
hash.set("namfdfde", "sdfsdf")

hash.display()