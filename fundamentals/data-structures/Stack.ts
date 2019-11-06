const log = console.log;

class StackNode {
	public val;
	public next: StackNode;

	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	public first: StackNode;
	public last: StackNode;
	public length: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	push(val): Stack {
		const newNode: StackNode = new StackNode(val);
		if(this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		}
		else {
			const temp: StackNode = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		this.length ++;
		return this;
	}

	pop() {
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

let stack = new Stack();
stack.print();

log('push 5, should be 5');
stack.push(5).print();
log('push 6, should be 6 5');
stack.push(6).print();
log('pop 6, should be 5')
log(stack.pop());
stack.print();
console.log('push 7, should be 7 5');
stack.push(7).print();
console.log('pop twice, should be empty');
log(stack.pop());
log(stack.pop());
stack.print();
