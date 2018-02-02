// https://www.codewars.com/kata/counting-duplicates/javascript
function duplicateCount(text){
    //...
    var text = text.toLowerCase().split('').sort()
    console.log(text)
    var count = 0
    var check = ''
    for(var i=0;i<text.length;i++){
        if(text[i]===text[i+1]&&text[i]!==check) {
            check=text[i]
            count++
        }
    }
    return count
}