function subarray(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let s_arr = [];
            for (let k = i; k <= j; k++) {
                s_arr.push(arr[k]);
            }
            console.log(s_arr);
        }
    }
}

console.time('execution_time');
let input = [1, 5, 7, 1];
// let input = [1, 2, 3, 4];
// console.log(subarray(input, input.length));
subarray(input, input.length)
console.timeEnd('execution_time');
