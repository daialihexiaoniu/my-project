function tribonacci(signature,n){
    var one = signature[0],
        two = signature[1],
        three = signature[2],
        four = 0;
    console.log(one+"-"+two+"-"+three)
    for(var i=0;i<n-3;i++) {
        four = one + two + three;
        one = two;
        two = three;
        three = four;
        signature.push(four)
    }
    var result = [];
    for(var j=0;j<n;j++) {
        result.push(signature[j])
    }
    return result;
}
