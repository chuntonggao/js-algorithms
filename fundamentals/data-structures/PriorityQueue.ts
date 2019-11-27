class QueueNode {
    public readonly val: string;
    public readonly priority: number;
    constructor(val: string, priority: number) {
        this.val = val;
        this.priority = priority;
    }

    print(): void {
        console.log(`val: ${this.val}, priority: ${this.priority}`);
    }
}

class PriorityQueue {
    public readonly values: QueueNode[];

    constructor() {
        this.values = [];
    }

    enqueue(val: string, priority: number): void {
        const newNode = new QueueNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(): void {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue(): QueueNode {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
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
                if (leftChild.priority < element.priority) swap = leftChildIdx;
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    print(): void {
        console.log('=========== QUEUE START ==============');
        this.values.forEach(v => v.print());
        console.log('=========== QUEUE END ==============');
        console.log(' ');
        console.log(' ');
    }
}

const queue: PriorityQueue = new PriorityQueue();
queue.enqueue('common cold', 5);
queue.print();
queue.enqueue('gunshot wound', 1);
queue.print();
queue.enqueue('high fever', 4);
queue.print();
queue.enqueue('broken arm', 2);
queue.print();
queue.enqueue('glass in foot', 3);
queue.print();

queue.dequeue().print();
queue.print();
queue.dequeue().print();
queue.print();
queue.dequeue().print();
queue.print();
queue.dequeue().print();
queue.print();
queue.dequeue().print();
queue.print();
