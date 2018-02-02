// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
function score( dice ) {
    // Fill me in!
    console.log(dice)
    var result = 0;
    var count1 = 0,
        count2 = 0,
        count3 = 0,
        count4 = 0,
        count5 = 0,
        count6 = 0;
    for(var i=0;i<dice.length;i++) {
        if(dice[i] === 1) {count1++}
        if(dice[i] === 2) {count2++}
        if(dice[i] === 3) {count3++}
        if(dice[i] === 4) {count4++}
        if(dice[i] === 5) {count5++}
        if(dice[i] === 6) {count6++}
    }
    if(count1>=3) {
        result += 1000 + (count1-3)*100
    } else {
        result += count1*100
    }
    if(count2>=3) {
        result += 200
    }
    if(count3>=3) {
        result += 300
    }
    if(count4>=3) {
        result += 400
    }
    if(count5>=3) {
        result += 500 + (count5-3)*50
    } else {
        result += count5*50
    }
    if(count6>=3) {
        result += 600
    }
    return result
}