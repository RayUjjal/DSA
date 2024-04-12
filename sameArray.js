function check(A,B,N){
    A=A.slice().sort();
    B=B.slice().sort();
    for(let i=0;i<N;i++){
        if(A[i]!=B[i]){
            return 0;
        }
    }
    return 1;
}

let input1 = [1,2,5,4,0];
let input2 = [2,4,5,0,1];
console.log(check(input1,input2,input1.length));