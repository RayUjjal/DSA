function getPairsCount(arr, n, k) {
    let count =0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let s_arr = [];
            for (let k = i; k <= j; k++) {
                s_arr.push(arr[k]);
            }
            let totalSum=s_arr.reduce((acc, curr) => acc + curr, 0);
            if(totalSum==k){
                count++;
            }
            console.log(s_arr);
        }
    }
    return count;
}

console.time('execution_time');
let input = [1, 5, 7, 1];
let k=6;
console.log(getPairsCount(input, input.length,k));
console.timeEnd('execution_time');
