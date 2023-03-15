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
        this.table[index] = value
    }

    get(key) {
        let index = this.hash(key)
        if (this.table[index]) {
            return this.table[index]
        }
        else {
            return null
        }
    }

    remove(key) {
        let index = this.hash(key)
        this.table[index] = undefined
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

hash.set("name" , "Gokul")
hash.set("dfdddd" , "abbas")
hash.set("terr" , "gouhtam")
hash.set("namfdfde" , "sdfsdf")

hash.display()