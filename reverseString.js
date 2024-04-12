function reverseWord(str){
    return str.split('').reverse().join(''); 
    // str=str.split('');
    // let strRev=[];
    // for(let i=str.length-1;i>=0;i--){
    //     strRev.push(str[i]);
    // }
    // return strRev.join(''); 
}

const input = "testsample";
console.log(reverseWord(input));