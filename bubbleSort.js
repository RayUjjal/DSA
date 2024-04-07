/*
bubble sort
*/

function bubbleSort(a, n) {
    for (let i = n - 1; i > 0; i--) {
        let swap = false;
        for (let j = 0; j <= i; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    return n > 0 ? a : [-1];
}

const arr = [3,4,12,3,12,3,4,4,12,7,11,6,5]
console.log(bubbleSort(arr, arr.length));