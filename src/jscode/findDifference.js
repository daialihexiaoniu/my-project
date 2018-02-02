// https://www.codewars.com/kata/58cb43f4256836ed95000f97/solutions/javascript

function findDifference(a, b) {
    //loading...
    var arra = a.reduce(function(a,b) {
        return a*b
    })
    var arrb = b.reduce(function(a,b) {
        return a*b
    })

    return arra > arrb ? arra-arrb : arrb - arra
}