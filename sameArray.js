function check(A, B, N) {
    if (N === 1 && A[0] !== B[0]) {
        return 0;
    }

    // Sort arrays A and B
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    // Compare sorted arrays A and B
    for (let i = 0; i < N; i++) {
        if (A[i] !== B[i]) {
            return 0;
        }
    }

    return 1;
}

let input1 = [245];
let input2 = [401];
console.log(check(input1, input2, input1.length));