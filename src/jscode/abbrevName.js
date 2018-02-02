// https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript
function abbrevName(name){
    // code away
    var nameArr = name.split(' ')
    var result = []
    for(var i=0;i<nameArr.length;i++) {
        var namePos = nameArr[i].split('')[0].toUpperCase()
        result.push(namePos)
        if(i<nameArr.length-1) {
            result.push('.')
        }
    }
    return result.join('')
}