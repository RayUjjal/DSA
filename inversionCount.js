function merge(arr, temp, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;
    let count = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            count += mid - i + 1; // Counting inversions
        }
    }

    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    while (j <= right) {
        temp[k++] = arr[j++];
    }

    for (let p = left; p <= right; p++) {
        arr[p] = temp[p];
    }

    return count;
}

function mergeSort(arr, temp, left, right) {
    let count = 0;
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        count += mergeSort(arr, temp, left, mid);
        count += mergeSort(arr, temp, mid + 1, right);
        count += merge(arr, temp, left, mid, right);
    }
    return count;
}

function inversionCount(arr, N) {
    const temp = new Array(N);
    return mergeSort(arr, temp, 0, N - 1);
}

console.time('execution_time');
let input = [13, 33, 43, 16, 25, 19, 23, 31, 29, 35, 10, 2, 32, 11, 47, 15, 34, 46, 30, 26, 41, 18, 5, 17, 37, 39, 6, 4, 20, 27, 9, 3, 8, 40, 24, 44, 14, 36, 7, 38, 12, 1, 42, 12, 28, 22, 45];
console.log(inversionCount(input, input.length));
console.timeEnd('execution_time');
