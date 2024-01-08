function findPairs (array, target) {

    let ans = [];
    
    let obj = {};
    
    for (let value of array) obj[value] = obj [value]===undefined ? 1 : obj[value]+1;
        
    for (let value of array) {
        if( undefined!==obj[target-value] ){ 
            for(let i=1; i<=Math.min(obj [value], obj[target-value]) ; i++){ 
                ans.push([value, target-value]);
        }
        obj[target-value] = 0;
        obj[value] = 0;
    }
    }
    
    return ans;
    
}
    
let array = [1,1,3,3,5,2,2,5,7,0,1,6];
console.log(findPairs(array,7));