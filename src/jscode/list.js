// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// returns 'Bart'

// list([])
// returns ''
function list(names){
    //your code here
    var arr = [];
    names.map(function(el) {
        arr.push(el.name)
    })
    var result = arr[0]
    if(arr.length>2) {
        for(var i=1;i<arr.length-1;i++) {
            result = result + ', '+arr[i]
        }
        result = result +' & '+arr[arr.length-1]
    } else if(arr.length == 2) {
        result += ' & ' + arr[1];
    } else if(arr.length == 0) {
        result = ''
    }
    return result;
}

// function list(names) {
//     var xs = names.map(p => p.name)
//     var x = xs.pop()
//     return xs.length ? xs.join(", ") + " & " + x : x || ""
// }