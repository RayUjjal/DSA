function subarray(arr, n) {
    let result = [];

    function generateCombinations(subarr, index) {
        result.push(subarr);
        for (let i = index; i < arr.length; i++) {
            generateCombinations(subarr.concat(arr[i]), i + 1);
        }
    }

    generateCombinations([], 0);
    return result;
}

console.time('execution_time');
let input = [1, 5, 7, 1];
// let input = [1, 2, 3, 4];
console.log(subarray(input, input.length));
// subarray(input, input.length)
console.timeEnd('execution_time');
