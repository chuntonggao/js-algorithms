const log = console.log;

const bubbleSort = (arr: number[]): number[] => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps: boolean = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                [ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
};

log(bubbleSort([ 8, 1, 2, 3, 4, 5, 6, 7 ]));