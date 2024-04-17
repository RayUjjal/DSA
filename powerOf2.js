function isPowerofTwo(n) {
    let base = 2;
    let res=base;
    if (n > 0 && n <= base) {
        return true;
    }
    else if (n == 0) {
        return false;
    }
    
    while (res <= n){
        res *= base;
        if(res==n){
            return true;
        }
    }
    return false;
}

function isPowerofTwo2(n) {
    console.log("Math.log(n)::", Math.log(n));
    console.log("Math.log(2)::", Math.log(2));
    let result = Math.log(n) / Math.log(2);
    console.log("result::", result);
    return result % 1 == 0;
}

const input = 0;
console.log(isPowerofTwo(input) ? "YES" : "NO");
// console.log(isPowerofTwo2(input) ? "YES" : "NO");