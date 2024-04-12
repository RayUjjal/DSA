function printFibb(n) {
    let res = [];
    let a = 1, b = 1;
    for (let i = 0; i < n; i++) {
        res.push(BigInt(a));
        let temp = BigInt(a) + BigInt(b);
        a = BigInt(b);
        b = BigInt(temp);
    }
    return res;
}

const input = 81;
console.log(printFibb(input));