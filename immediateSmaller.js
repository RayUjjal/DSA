function immediateSmaller(arr, n) {
    //code here
    for (let i = 0; i < n; i++) {
        if (i == n - 1) {
            arr[i] = -1;
        }
        else {
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1];
            }
            else {
                arr[i] = -1;
            }

        }
    }
    return arr;
}

let input = [4, 2, 1, 5, 3];
console.log(immediateSmaller(input, input.length));