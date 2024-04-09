function subarray(arr, n, k) {
    let result = [];

    // Iterate through the array
    for (let i = 0; i <= n - k; i++) {
        let max = arr[i]; // Initialize maximum element within the current window

        // Find maximum element within the current window
        for (let j = 1; j < k; j++) {
            if (arr[i + j] > max) {
                max = arr[i + j];
            }
        }

        result.push(max); // Push maximum element of the current window to result array
    }

    return result;
}

const arr = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
console.log(subarray(arr, arr.length, 4));