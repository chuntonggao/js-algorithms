const log = console.log;

class ListNode {
	public prev: ListNode;
	public next: ListNode;
	public val;

	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	public head: ListNode;
	public tail: ListNode;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val): DoublyLinkedList {
		const newNode: ListNode = new ListNode(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length ++;
		return this;
	}

	pop(): ListNode {
		if(this.length === 0) return undefined;
		const result: ListNode = this.tail;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.tail = result.prev;
			this.tail.next = null;
			result.prev = null;
		}
		this.length --;
		return result;
	}

	shift(): ListNode {
		if(this.length === 0) return undefined;
		const result: ListNode = this.head;
		if(this.length === 1) {
			this.head = null;
			this.tail = null;
		}
		else {
			this.head = this.head.next;
			this.head.prev = null;
			result.next = null;
		}
		this.length --;
		return result;
	}

	unshift(val): DoublyLinkedList {
		const newNode: ListNode = new ListNode(val);
		if(this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		}
		else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length ++;
		return this;
	}

	get(index: number): ListNode {
		if(index < 0 || index > this.length - 1) 
			return undefined;
		let counter: number;
		let cur: ListNode;
		if(index <= this.length / 2) {
			counter = 0;
			cur = this.head;
			while(counter !== index) {
				cur = cur.next;
				counter ++;
			}
		}
		else {
			counter = this.length - 1;
			cur = this.tail;
			while(counter !== index) {
				cur = cur.prev;
				counter --;
			}

		}
		return cur;
	}

	set(index: number, val): DoublyLinkedList {
		const node: ListNode = this.get(index);
		if(!node) return undefined;
		node.val = val;
		return this;
	}

	insert(index: number, val): DoublyLinkedList {
		if(index < 0 || index > this.length) 
			return undefined;
		if(index === 0)
			return this.unshift(val);
		if(index === this.length)
			return this.push(val);

		const prev: ListNode = this.get(index - 1);
		const next: ListNode = prev.next;
		const newNode: ListNode = new ListNode(val);
		newNode.prev = prev;
		newNode.next = next;
		prev.next = newNode;
		next.prev = newNode;
		this.length ++;
		return this;
	}

	remove(index: number): ListNode {
		if(index < 0 || index > this.length - 1)
			return undefined;
		if(index === 0)
			return this.shift();
		if(index === this.length - 1)
			return this.pop();

		const node: ListNode = this.get(index);
		const prev = node.prev;
		const next = node.next;
		prev.next = next;
		next.prev = prev;
		node.prev = null;
		node.next = null;
		this.length --;
		return node;
	}

	reverseRecursive(): DoublyLinkedList {
		if(this.length === 0 || this.length === 1)
			return this;
		const oldHead = this.shift();
		this.reverseRecursive();
		this.push(oldHead.val);
		return this;
	}

	print(): void {
		const arr = [];
		let current = this.head;
		while(current) {
			arr.push(current.val);
			current = current.next;
		}
		log(arr);
	}
}

log('push 1 2 3');
const list: DoublyLinkedList = new DoublyLinkedList;
list.push(1).print();
list.push(2).print();
list.push(3).print();

log('pop 3');
log(list.pop().val);
list.print();
log('pop 2');
log(list.pop().val);
list.print();
log('pop 1');
log(list.pop().val);
list.print();
log('nothing to pop anymore');
log(list.pop());
list.print();

log('unshift a b c');
list.unshift('a').print();
list.unshift('b').print();
list.unshift('c').print();

log('shift c');
log(list.shift().val);
list.print();
log('shift b');
log(list.shift().val);
list.print();
log('shift a');
log(list.shift().val);
list.print();
log('nothing to shift anymore');
log(list.shift());
list.print();


log('push 1 2 3 4 5 6');
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.print();
log('index 1 should be 2');
log(list.get(1).val);
log('index 2 should be 3');
log(list.get(2).val);
log('index 5 should be 6');
log(list.get(5).val);
log('index 6 should be undefined');
log(list.get(6));
log('set index 5 to 1000');
list.set(5, 1000);
list.print();

log('insert 98 at index 3');
list.insert(3, 98).print();
log('insert 91 at beginning');
list.insert(0, 91).print();
log('insert 9812 at end');
list.insert(list.length, 9812).print();
log('insert 444 at index 4');
list.insert(4, 444).print();

log('remove 444 at index 4');
log(list.remove(4).val);
list.print();
log(`list length = ${list.length}`);
log('remove from beginning');
log(list.remove(0).val);
list.print();
log('remove from end');
log(list.remove(list.length - 1).val);
list.print();

log('resursively reverse');
list.reverseRecursive().print();


