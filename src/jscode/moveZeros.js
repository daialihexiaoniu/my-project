// Moving Zeros To The End

var moveZeros = function (arr) {
    // TODO: Program me
    var count = 0,
        result =[];
    for(let i=0;i<arr.length;i++) {
        if(arr[i]!==0) {
            result.push(arr[i])
        } else {
            count ++
        }
    }
    for(let i=0;i<count;i++) {
        result.push(0)
    }
    return result
}