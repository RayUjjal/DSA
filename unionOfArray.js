function doUnion(a, n, b, m) {
    // code here
    let result = new Set();
    let i = 0;
    let j = 0;

    while (i < n || j < m) {
        if (i < n) {
            result.add(a[i]);
            i++;
        }
        if (j < m) {
            result.add(b[j]);
            j++;
        }
    }
    return result.size;
}

let input1 = [1, 2, 3, 4, 5];
let input2 = [1, 2, 3];
console.log(doUnion(input1, input1.length, input2, input2.length));


