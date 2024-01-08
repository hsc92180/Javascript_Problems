function arrayIntersection(arr1, arr2){
    let freq = {};
    let = ans = [];
    for(let val of arr1)  freq[val] = true;
    for(let val of arr2)  if(freq[val]) ans.push(val);
    return ans;
}

let arr1 = [1, 2, 3];
let arr2 = [3, 1, 5];
let rev_arr = arrayIntersection(arr1, arr2);
console.log(rev_arr);