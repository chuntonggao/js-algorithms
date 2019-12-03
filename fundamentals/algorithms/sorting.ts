const log = console.log;

const swap = (arr: number[], idx1: number, idx2: number): void => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
};

// time: best n, avg nn, worst nn
// space: 1
const bubbleSort = (arr: number[]): number[] => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps: boolean = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
};

// time: best nn, avg nn, worst nn
// space: 1
const selectionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) swap(arr, i, min);
    }
    return arr;
};

// time: best n, avg nn, worst nn
// space: 1
const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        const cur = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > cur) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = cur;
    }
    return arr;
};

// time: best nlogn, avg nlogn, worst nn (already sorted)
// space: nlogn
const quickSort = (arr, left = 0, right = arr.length - 1): number[] => {
    const pivot = (arr, start = 0, end = arr.length - 1): number => {
        //  Assume pivot is always the 1st element
        const pivot = arr[start];
        let swapIdx = start;
        for (let i = start + 1; i <= end; i++) {
            if (pivot > arr[i]) {
                swapIdx++;
                swap(arr, swapIdx, i);
            }
        }
        swap(arr, start, swapIdx);
        return swapIdx;
    };

    if (left < right) {
        const pivotIdx = pivot(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
};


log('===== BUBBLE SORT =====');
log(bubbleSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');

log('===== SELECTION SORT =====');
log(selectionSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');

log('===== INSERTION SORT =====');
log(insertionSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');

log('===== QUICK SORT =====');
log(quickSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');
