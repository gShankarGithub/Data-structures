// Insert 

function insert(heap, value) {
    heap.push(value)
    let currIndex = heap.length - 1
    let parIndex = Math.floor((currIndex - 1) / 2)
    while (currIndex > 0 && heap[currIndex] > heap[parIndex]) {
        [heap[currIndex], heap[parIndex]] = [heap[parIndex], heap[currIndex]]
        currIndex = parIndex
        parIndex = Math.floor((currIndex - 1) / 2)
    }
}

// Remove
function remove(heap) {
    if (heap.length === 0) {
        return null;
    }
    let root = heap[0]
    heap[0] = heap.pop()
    let currIndex = 0
    let childIndex = (2 * currIndex) + 1
    while (childIndex < heap.length) {
        if (childIndex + 1 < heap.length && heap[childIndex + 1] > heap[childIndex]) {
            childIndex += 1
        }
        if (heap[currIndex] < heap[childIndex]) {
            [heap[currIndex], heap[childIndex]] = [heap[childIndex], heap[currIndex]]
            currIndex = childIndex
            childIndex = (2 * currIndex) + 1
        } else {
            break
        }
    }
    return root
}

// Heapify

function heapify(arr) {
    let n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, i, n)
    }
}

function heapifyDown(arr, i, n) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest !== i) {
        [arr[i],arr[largest]] = [arr[largest],arr[i]]
        heapifyDown(arr,largest,n)
    }
}