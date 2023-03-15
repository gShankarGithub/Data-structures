class MinBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12]
    }

    insert(value) {
        this.values.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.values.length - 1
        let element = this.values[index]
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            let parent = this.values[parentIndex]
            if (element >= parent) {
                break
            }
            this.values[index] = parent
            this.values[parentIndex] = element
            let index = parentIndex
            console.log(index);
        }
    }
}


let heap = new MinBinaryHeap()

heap.insert(55)