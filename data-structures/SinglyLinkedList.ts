class ListNode {
	public val;
	public next: ListNode;

	constructor(val) {
		this.val = val;
		this.next = null;
	}
}	

class SinglyLinkedList {
	public head: ListNode;
	public tail: ListNode;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val): SinglyLinkedList {
		const newNode: ListNode = new ListNode(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			this.tail = newNode;
		}  
		this.length ++;
		return this;
	}

	pop(): ListNode {
		if(!this.head) return undefined;

		let cur: ListNode = this.head;
		let newTail: ListNode = cur;
		while(cur.next) {
			newTail = cur;
			cur = cur.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length --;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return cur; 
	}

	shift(): ListNode {
		if(!this.head) return undefined;
		const curHead: ListNode = this.head;
		this.head = curHead.next;
		this.length --;
		if(this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return curHead;
	}

	unshift(val): SinglyLinkedList {
		const newNode: ListNode = new ListNode(val);
		if(!this.head) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length ++;
		return this;
	}

	get(index: number): ListNode {
		if(index < 0 || index >= this.length)
			return undefined;
		let counter: number = 0;
		let cur: ListNode = this.head;
		while(counter < index) {
			cur = cur.next;
			counter ++;
		}
		return cur;
	}

	set(index: number, val): SinglyLinkedList {
		const foundNode: ListNode = this.get(index);
		if(!foundNode) return undefined;
		foundNode.val = val;
		return this;
	}	

	insert(index: number, val): SinglyLinkedList {
		if(index < 0 || index > this.length) 
			return undefined;
		if(index === 0) 
			return this.unshift(val);
		if(index === this.length) 
			return this.push(val);
		let prev: ListNode = this.get(index - 1);
		const newNode: ListNode = new ListNode(val);
		newNode.next = prev.next;
		prev.next = newNode;
		this.length ++;
		return this;
	}

	remove(index: number): ListNode {
		if(index < 0 || index > this.length - 1) 
			return undefined;
		if(index === 0) return this.shift();
		if(index === this.length - 1) return this.pop();
		const prevNode: ListNode = this.get(index - 1);
		const foundNode = prevNode.next;
		prevNode.next = foundNode.next;
		this.length --;
		return foundNode;
	}

	reverseRecursive(): SinglyLinkedList {
		if(this.length === 0 || this.length === 1)
			return this;
		const firstVal = this.shift().val;
		this.reverseRecursive();
		this.push(firstVal);
		return this;
	}

	reverseIterative():SinglyLinkedList {
		let node: ListNode = this.head;
		this.head = this.tail
		this.tail = node;
		let next: ListNode;
		let prev: ListNode = null;
		for(let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}
		return this;
	}

	print(): void {
		const arr = [];
		let current = this.head;
		while(current) {
			arr.push(current.val);
			current = current.next;
		}
		console.log(arr);
	}

}

const list = new SinglyLinkedList();
list.print();
console.log('push 1 2 3');
list.push(1).print();
list.push(2).print();
list.push(3).print();
console.log('test get');
console.log(list.get(0).val);
console.log(list.get(1).val);
console.log(list.get(2).val);
console.log(list.get(3));
console.log('test pop');
console.log(list.pop().val);
list.print();
console.log(list.pop().val);
list.print();
console.log(list.pop().val);
list.print();

console.log('unshift a b c');
list.unshift('a').print();
list.unshift('b').print();
list.unshift('c').print();

console.log('set b to bbbbb');
list.set(1, 'bbbb').print();

console.log('insert xxxx at position 1');
list.insert(1, 'xxxx').print();
console.log('remove xxxx');
console.log(list.remove(1).val);
list.print();

console.log('test shift')
console.log(list.shift().val);
list.print();
console.log(list.shift().val);
list.print();
console.log(list.shift().val);
list.print();


console.log('push 1 2 3');
list.push(1).print();
list.push(2).print();
list.push(3).print();
console.log('reverse to 3 2 1 recursively');
list.reverseRecursive().print();
console.log('reverse back to 1 2 3 iteratively');
list.reverseIterative().print();
