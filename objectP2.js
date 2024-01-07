// Q2.) Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
// Should work like that:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false

function isEmpty(obj){
    let count=0;
    for(key in obj){
        count++;
    }
    if(count === 0){
        return true;
    }
    return false;
};

let schedule = {};
console.log(schedule);
console.log("isEmpty: ",isEmpty(schedule));

let schedule1 = {
    "5:30" : "Get UP",
    "6:00" : "Go to GYM"
};
console.log(schedule1);
console.log("isEmpty: ", isEmpty(schedule1));