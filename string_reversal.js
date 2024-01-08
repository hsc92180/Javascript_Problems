function reverseStr(str){
    let revStr = "";
    for(let i=str.length-1; i>=0; i--){
        revStr += str[i];
    }
    return revStr;
}

let str = "Geekster";
let reverse_Str = reverseStr(str);
console.log(reverse_Str); 