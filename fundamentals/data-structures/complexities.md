# Javascript Object

- Insertion: **O(1)**
- Removal: **O(1)**
- Searching: **O(N)**
- Access: **O(1)**

# Array

- Insertion / Removal:
  - At beginning: **O(n)**
  - At end: **O(1)**
- Searching (unsorted): **O(n)**
- Access: **O(1)**
- JavaScript built-in methods:
  - push / pop:  **O(1)**
  - shift / unshift: **O(1)**
  - concat: **O(n)**
  - slice: **O(n)**
  - splice: **O(n)**
  - sort: **O(nlogn)**
  - forEach / map / filter / reduce / etc.: **O(n)**

# Singly Linked List

- [Implementation in JavaScript](./SinglyLinkedList.ts)
- Insertion: **O(1)**
- Removal:
  - At beginning: **O(1)**
  - At end: **O(n)**
- Searching: **O(n)**
- Access: **O(n)**

# Doubly Linked List

- [Implementation in JavaScript](./DoublyLinkedList.ts)
- Insertion: **O(1)**
- Removal: **O(1)**
- Searching: **O(n/2)**
- Access: **O(n)**
- Uses more memory than singly linked list

# Stack

- [Implementation in JavaScript (using linked list)](./Stack.ts)
- Push: **O(1)**
- Pop: **O(1)**

# Queue

- [Implementation in JavaScript (using linked list)](./Queue.ts)
- Enqueue: **O(1)**
- Dequeue: **O(1)**

# BST

- [Implementation in JavaScript](./BST.ts)
- Insert: **average O(logn), worst O(n)**
- Searching: **average O(logn), worst O(n)**

# Binary Heap

- [Implementation in JavaScript](./MaxBinaryHeap.ts)
- Insert: **O(logn)**
- Delete: **O(logn)**
- Search: **O(n)**