function searchInSorted(arr, N, K){
    let i=0;
    while(i<N){
        if(arr[i]==K){
            return 1;
        }
        i++;
    }
    return -1;
}

let input=[1,3,4,5,6];
let K=2;
console.log(searchInSorted(input, input.length,K));
