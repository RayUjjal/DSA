function isSubset(a1, a2, n, m){
    //code here
    if(m>n){
        return "No";
    }
    for(let i=0;i<m;i++){
        let res=false;
        for(let j=0;j<n;j++){
            if(a2[i]==a1[j]){
                a1[j]=NaN;
                res=true;
                break;
            }
        }
        if(!res){
            return "No";
        }
    }
    return "Yes";
}

let input1=[8,4,5,3,1,7,9];
let input2=[5,1,3,7,9];
console.log(isSubset(input1,input2,input1.length,input2.length));