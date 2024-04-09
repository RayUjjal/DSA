function getMaxOccuringChar(str) {
    str=str.split('');
    let result = {};
    for (let i=0;i<str.length;i++) {
        for (let j = i; j < str.length; j++) {
            if (parseInt(str[i].charCodeAt(0)) > parseInt(str[j].charCodeAt(0))) {
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }
    return str;
}

const input = "testsample";
console.log(getMaxOccuringChar(input));