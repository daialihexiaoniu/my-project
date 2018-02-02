//https://www.codewars.com/kata/noobcode-01-supersize-me-dot-dot-dot-or-rather-this-integer/train/javascript
function superSize(num){
    return Number(num.toString().split('').sort(function(a,b){
        return b-a}).join(''))
}