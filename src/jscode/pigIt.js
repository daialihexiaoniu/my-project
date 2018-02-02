// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
    //Code here
    var arr = str.split(' ');
    var result = [];
    arr.map(function(el){
        var list = el.split('');
        var i = list.shift();
        list.push(i+'ay');
        result.push(list.join(''))
    })
    return result.join(' ')
}

// function pigIt(str){
//     return str.split(' ').map(function(el){
//         return el.slice(1) + el.slice(0,1) + 'ay';
//     }).join(' ');
// }