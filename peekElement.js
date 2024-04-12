function peekElement(arr,n){
    let res=[];
    for(let i=0;i<n;i++){
        let left=arr[i-1]!=undefined?arr[i-1]:true;
        let right=arr[i+1]!=undefined?arr[i+1]:true;
        if(left<=arr[i] && arr[i]>=right){
            res.push(i);
        }
    }
    return res[0];
}

const input=[3,4,2];
console.log(peekElement(input,input.length));