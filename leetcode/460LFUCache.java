import java.util.*;

class LFUCache {
    class Node {
        int key, value, count;
        Node prev, next;

        public Node() {
        }

        public Node(int key, int value) {
            this.key = key;
            this.value = value;
            count = 1;
        }
    }

    class DLinkedList {
        Node head, tail;
        int size;

        DLinkedList() {
            head = new Node();
            tail = new Node();
            head.next = tail;
            tail.prev = head;
        }

        void addNode(Node node) {
            // always add ned node right after head
            node.prev = head;
            node.next = head.next;
            head.next.prev = node;
            head.next = node;
        }

        void removeNode(Node node) {
            Node prev = node.prev;
            Node next = node.next;
            prev.next = next;
            next.prev = prev;
        }

        Node popTail() {
            if (size > 0) {
                Node res = tail.prev;
                removeNode(res);
                return res;
            } else
                return null;
        }
    }

    
}