const log = console.log;

class QueueNode {
	public val;
	public next: QueueNode;

	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Queue {
	public first: QueueNode;
	public last: QueueNode;
	public length: number; 
    
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

	enqueue(val): Queue {
		const newNode: QueueNode = new QueueNode(val);
		if(this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			this.last.next = newNode;
			this.last = newNode
		}
		this.length ++;
		return this;
	}

	dequeue() {
		if(this.length === 0) return undefined;

		const val = this.first.val;
		this.first = this.first.next;

		if(this.length === 1) this.last = null;

		this.length --;
		return val;
	}

	print(): void {
		const arr = [];
		let cur = this.first;
		while(cur) {
			arr.push(cur.val);
			cur = cur.next;
		}
		log(arr);
	}
}

const queue: Queue = new Queue();
queue.print();

log('enqueue 1');
queue.enqueue(1).print();
log('enqueue 2');
queue.enqueue(2).print();
log('dequeue');
log(queue.dequeue());
queue.print();
log('enqueue 5');
queue.enqueue(5).print();
log('dequeue');
log(queue.dequeue());
queue.print();
log('dequeue');
log(queue.dequeue());
queue.print();