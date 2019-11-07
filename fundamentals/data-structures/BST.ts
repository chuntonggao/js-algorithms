const log = console.log;

class TreeNode {
    public val: string;
    public left: TreeNode;
    public right: TreeNode;

    constructor(val: string) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    public root: TreeNode;
    constructor() {
        this.root = null;
    }

    insert(option: string, val: string): BST {
        if (!this.root) this.root = new TreeNode(val);
        else if (option === 'recursive') this.insertRecursive(this.root, val);
        else if (option === 'iterative') this.insertIterative(val);
        return this;
    }

    contains(option: string, val: string): boolean {
        if (option === 'recursive') return this.containsRecursive(this.root, val);
        else if (option === 'iterative') return this.containsIterative(val);
    }

    insertRecursive(root: TreeNode, val: string): void {
        const newNode = new TreeNode(val);
        if (val < root.val) {
            if (!root.left) root.left = newNode;
            else this.insertRecursive(root.left, val);
        }
        else {
            if (val > root.val) {
                if (!root.right) root.right = newNode;
                else this.insertRecursive(root.right, val);
            }
        }
    }

    insertIterative(val: string): void {
        const newNode = new TreeNode(val);
        let cur: TreeNode = this.root;
        /* eslint-disable-next-line */
        while (true) {
            if (val < cur.val) {
                if (!cur.left) {
                    cur.left = newNode;
                    return;
                }
                else cur = cur.left;
            }
            if (val > cur.val) {
                if (!cur.right) {
                    cur.right = newNode;
                    return;
                }
                else cur = cur.right;
            }
        }
    }

    containsRecursive(root: TreeNode, val: string): boolean {
        if (!root) return false;
        if (root.val === val) return true;
        else
            return (
                this.containsRecursive(root.left, val) ||
                this.containsRecursive(root.right, val)
            );
    }

    containsIterative(val: string): boolean {
        if (!this.root) return false;
        let cur: TreeNode = this.root;
        while (cur.val !== val) {
            if (val < cur.val) {
                if (cur.left) cur = cur.left;
                else return false;
            }
            else {
                if (cur.right) cur = cur.right;
                else return false;
            }
        }
        return true;
    }

    /*
	Input:
	      1
	     / \
	    2   5
	   / 
	  3 
	 / 
	4 

	Output:
	[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
	 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
	 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 	 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

 	*/
    print(): void {
        //console.log(this.root);
        const height: number = this.getHeight(this.root);
        const width: number = Math.pow(2, height) - 1;
        const res: string[][] = [];
        for (let m = 0; m < height; m++) {
            const row: string[] = [];
            for (let n = 0; n < width; n++) row.push('');
            res.push(row);
        }
        this.fill(res, this.root, 0, 0, width - 1);
        log(res);
    }

    fill(res: string[][], root: TreeNode, rowNum: number, l: number, r: number): void {
        if (!root) return;
        const colNum: number = (l + r) / 2;
        res[rowNum][colNum] = '' + root.val;
        this.fill(res, root.left, rowNum + 1, l, colNum - 1);
        this.fill(res, root.right, rowNum + 1, colNum + 1, r);
    }

    getHeight(root: TreeNode): number {
        if (!root) return 0;
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    }
}

const bst: BST = new BST();
// bst.root = new TreeNode('1');
// bst.root.left = new TreeNode('2');
// bst.root.right = new TreeNode('5');
// bst.root.left.left = new TreeNode('3');
// bst.root.left.left.left = new TreeNode('4');
// bst.print();

log('find 1 in empty tree recursively');
log(bst.contains('recursive', '1'));
log('find 1 in empty tree iteratively');
log(bst.contains('iterative', '1'));

log('insert 1 4 2 3 r i i r');
bst.insert('recursive', '1').print();
bst.insert('iterative', '4').print();
bst.insert('iterative', '2').print();
bst.insert('recursive', '3').print();

log('find 1 2 3 4 5 recursively');
log(bst.contains('recursive', '1'));
log(bst.contains('recursive', '2'));
log(bst.contains('recursive', '3'));
log(bst.contains('recursive', '4'));
log(bst.contains('recursive', '5'));

log('find 1 2 3 4 5 iteratively');
log(bst.contains('iterative', '1'));
log(bst.contains('iterative', '2'));
log(bst.contains('iterative', '3'));
log(bst.contains('iterative', '4'));
log(bst.contains('iterative', '5'));
