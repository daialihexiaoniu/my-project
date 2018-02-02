// https://www.codewars.com/kata/are-they-the-same/javascript

function comp(array1, array2){
    //your code here
    if(array1===null || array2===null) {
        return false
    } else {
        var arr1 = array1.sort(function(a, b){
            return a - b;
        })
        var arr2 = array2.sort(function(a, b){
            return a - b;
        })
        for(var i= 0;i<arr1.length;i++) {
            if(arr2.indexOf(arr1[i]*arr1[i]) < 0) return false
            if(arr1[i]===arr1[i+1]) {
                if(arr2[i] !== arr2[i+1]) {
                    return false
                }
            }
        }
    }
    return true
}

comp([77, 77, 20, 28, 60],[5929, 5929, 400, 784, 3600])



// function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }