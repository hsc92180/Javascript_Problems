function arrayRightRotation(arr, rotationCount){
    let rotated_arr = [];
    for(let i=arr.length-rotationCount; i<arr.length; i++)
        rotated_arr.push(arr[i]);

    for(let i=0; i<arr.length-rotationCount; i++)
        rotated_arr.push(arr[i]);
    
    return rotated_arr;
}

let rotated_arr = arrayRightRotation([1, 4, 2, 6, 7, 8, 9],5);
console.log(rotated_arr);