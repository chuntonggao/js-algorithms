const log = console.log;

const swap = (arr: number[], idx1: number, idx2: number): void => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
};

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

log('===== BUBBLE SORT =====');
log(bubbleSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');

log('===== SELECTION SORT =====');
log(selectionSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');

log('===== INSERTION SORT =====');
log(insertionSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));
log('===== =========== =====');
