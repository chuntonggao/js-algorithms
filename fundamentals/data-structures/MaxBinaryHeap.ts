class MaxBinaryHeap {
    private values: number[];

    constructor() {
        this.values = [];
    }

    insert(e: number): void {
        this.values.push(e);
        this.bubbleUp();
    }

    bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentElement = this.values[parentIdx];
            if (element <= parentElement) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }

    extractMax(): number | undefined {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(): void {
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
                if (leftChild > element) swap = leftChildIdx;
            }

            if (rightChild < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                )
                    swap = rightChildIdx;
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    print(): void {
        console.log(this.values);
    }

    isEmpty(): boolean {
        return this.values.length === 0;
    }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.print(); // [ 55, 39, 41, 18, 27, 12, 33 ]

const log = console.log;

while (!heap.isEmpty()) {
    log(heap.extractMax());
    heap.print();
}
