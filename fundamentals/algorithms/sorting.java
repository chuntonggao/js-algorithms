import java.util.*;

class Sorting {
    public static void main(String[] args) {
        Sorting s = new Sorting();
        s.run();
    }

    private void run() {
        int[] bubble = { 8, 1, 2, 3, 4, 5, 6, 7 };
        bubbleSort(bubble);
        System.out.println("===== BUBBLE SORT =====");
        for (int num : bubble)
            System.out.println(num);
        System.out.println("===== =========== =====");

        int[] selection = { 8, 1, 2, 3, 4, 5, 6, 7 };
        selectionSort(selection);
        System.out.println("===== SELECTION SORT =====");
        for (int num : selection)
            System.out.println(num);
        System.out.println("===== =========== =====");

        int[] insertion = { 8, 1, 2, 3, 4, 5, 6, 7 };
        insertionSort(insertion);
        System.out.println("===== INSERTION SORT =====");
        for (int num : insertion)
            System.out.println(num);
        System.out.println("===== =========== =====");

        int[] merge = { 8, 1, 2, 3, 4, 5, 6, 7 };
        merge = mergeSort(merge);
        System.out.println("===== MERGE SORT =====");
        for (int num : merge)
            System.out.println(num);
        System.out.println("===== =========== =====");

        int[] quick = { 8, 1, 2, 3, 4, 5, 6, 7 };
        quickSort(quick, 0, quick.length - 1);
        System.out.println("===== QUICK SORT =====");
        for (int num : quick)
            System.out.println(num);
        System.out.println("===== =========== =====");
    }

    private void swap(int[] arr, int idx1, int idx2) {
        int temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    private void bubbleSort(int[] arr) {
        for (int i = arr.length; i > 0; i--) {
            boolean noSwaps = true;
            for (int j = 0; j < i - 1; j++) {
                if (arr[j + 1] < arr[j]) {
                    swap(arr, j, j + 1);
                    noSwaps = false;
                }
            }
            if (noSwaps)
                break;
        }
    }

    private void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[min])
                    min = j;
            if (min != i)
                swap(arr, i, min);
        }
    }

    private void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int cur = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > cur) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = cur;
        }
    }

    private int[] mergeSort(int[] arr) {
        if (arr.length <= 1)
            return arr;
        int mid = arr.length / 2;
        int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
        int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
        return merge(left, right);
    }

    private int[] merge(int[] arr1, int[] arr2) {

        ArrayList<Integer> list = new ArrayList<Integer>();
        int p1 = 0, p2 = 0;
        while (p1 < arr1.length && p2 < arr2.length) {
            if (arr2[p2] > arr1[p1])
                list.add(arr1[p1++]);
            else
                list.add(arr2[p2++]);
        }
        while (p1 < arr1.length)
            list.add(arr1[p1++]);
        while (p2 < arr2.length)
            list.add(arr2[p2++]);
        int[] res = new int[list.size()];
        for (int i = 0; i < list.size(); i++)
            res[i] = list.get(i);
        return res;
    }

    private void quickSort(int[] arr, int left, int right) {
        if (left < right) {
            int pivotIdx = choosePivot(arr, left, right);
            quickSort(arr, left, pivotIdx - 1);
            quickSort(arr, pivotIdx + 1, right);
        }
    }

    private int choosePivot(int[] arr, int start, int end) {
        // Assume pivot is the 1st element
        int pivot = arr[start];
        int swapIdx = start;
        for (int i = start + 1; i <= end; i++)
            if (pivot > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        swap(arr, start, swapIdx);
        return swapIdx;
    }
}