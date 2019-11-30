import java.util.*;

class Solution {
    class Node {
        private int key;
        private int value;
        private Node prev;
        private Node next;

        public Node() {}

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
            this.prev = null;
            this.next = null;
        }
    }

    class DLinkedList {
        private Node head;
        private Node tail;

        public DLinkedList() {
            head = new Node();
            tail = new Node();
            head.next = tail;
            tail.prev = head;
        }

        public void addNode(Node node) {
            // always add ned node right after head
            node.prev = head;
            node.next = head.next;
            head.next.prev = node;
            head.next = node;
        }

        public void removeNode(Node node) {
            Node prev = node.prev;
            Node next = node.next;
            prev.next = next;
            next.prev = prev;
        }

        public void moveToHead(Node node) {
            removeNode(node);
            addNode(node);
        }

        public Node popTail() {
            Node res = tail.prev;
            removeNode(res);
            return res;
        }
    }

    class LRUCache {
        private Map<Integer, Node> cache = new HashMap<>();
        private DLinkedList list = new DLinkedList();
        private int size = 0;
        private int capacity;

        public LRUCache(int capacity) {
            this.size = 0;
            this.capacity = capacity;
        }

        public int get(int key) {
            Node node = cache.get(key);
            if (node == null)
                return -1;
            list.moveToHead(node);
            return node.value;
        }

        public void put(int key, int value) {
            Node node = cache.get(key);
            if (node == null) {
                Node newNode = new Node(key, value);
                cache.put(key, newNode);
                list.addNode(newNode);
                size++;
                if (size > capacity) {
                    Node tail = list.popTail();
                    cache.remove(tail.key);
                    size--;
                }
            } else {
                node.value = value;
                list.moveToHead(node);
            }
        }
    }

    private LRUCache cache = new LRUCache(2 /* capacity */ C);
    public static void main(String[] args) {
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1)); // returns 1
        cache.put(3, 3); // evicts key 2
        System.out.println(cache.get(2)); // returns -1 (not found)
        cache.put(4, 4); // evicts key 1
        System.out.println(cache.get(1)); // returns -1 (not found)
        System.out.println(cache.get(3)); // returns 3
        System.out.println(cache.get(4)); // returns 4
    }


}
/**
 * Your LRUCache object will be instantiated and called as such: LRUCache obj =
 * new LRUCache(capacity); int param_1 = obj.get(key); obj.put(key,value);
 */