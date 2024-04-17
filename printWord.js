let input = "ujjal kumar ray";
input = input.split('');
let result = '';
let letter = 'A';

let i = 0;
const interval = setInterval(() => {
    console.log(result+letter);
    if (letter === input[i]) {
        result+=letter;
        letter='A';
        i++;
    }
    else if (letter.charCodeAt(0) <= 'z'.charCodeAt(0)){
        letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    else if(input[i]==" "){
        result+=" ";
        letter='A';
        i++;
    }
    else{
        letter='A';
        i++;
    }
    
    if(i==input.length){
        clearInterval(interval);
    }
}, 50);

