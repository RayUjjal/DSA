function nextLargerElement(arr, n) {
    // code here
    for (let i = 0; i < n; i++) {
        let flag = false;
        if (i == n - 1) {
            arr[i] = -1;
            return arr;
        }
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                flag = true;
                arr[i] = arr[j];
                break;
            }
        }
        if (!flag) {
            arr[i] = -1;
        }
    }
    return arr;
}

let input = [6, 8, 0, 1, 3];
console.log(nextLargerElement(input, input.length));
