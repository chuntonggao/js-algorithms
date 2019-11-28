class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild < element) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                )
                    swap = rightChildIdx;
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.values[0];
    }

    size() {
        return this.values.length;
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
    this.k = k;
    this.q = new PriorityQueue();
    //     for (const num of nums)
    //         this.q.enqueue(num)
    //     while (this.q.size() > this.k)
    //         this.q.dequeue();
    for (const num of nums) this.add(num);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.q.size() < this.k) this.q.enqueue(val);
    else if (val > this.q.peek()) {
        this.q.dequeue();
        this.q.enqueue(val);
    }
    return this.q.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

const log = console.log;
const kl = new KthLargest(7, [ -10, 1, 3, 1, 4, 10, 3, 9, 4, 5, 1 ]);
log(kl.add(3)); // 3
log(kl.add(2)); // 3
log(kl.add(3)); // 3
log(kl.add(1)); // 3
log(kl.add(2)); // 3
log(kl.add(4)); // 3
