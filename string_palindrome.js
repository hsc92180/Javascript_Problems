function is_palindrome (str){

    let s=0,e=str.length-1;
    
    while( s<=e ){
        if(str[s].toLowerCase()===str[e].toLowerCase()){
            s += 1;    
            e -= 1;
        }
        else if(str[s].toLowerCase() < "a" || str[s].toLowerCase() > "z"){
            s += 1;
        }
        else if(str[e].toLowerCase() < "a" || str[e].toLowerCase() > "z"){
            e -=1;
        }
        else
            return false;
    }
    return true;
    
    }
    
let is_palin = is_palindrome ("abac");
let another = is_palindrome ("A man, a plan, a canal, Panama"); 
let test = is_palindrome("Ni,T In");   
console.log(is_palin);
console.log(another);
console.log(test);