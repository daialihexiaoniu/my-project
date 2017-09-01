$(function () {
    var dir = 2;//up:1 right:2 down:3 left:4
    var allTds = [];
    var ck =30;
    var k = 3;
    var she = [];
    var x = 0, y = k-1;
    var ji = null;
    var mark = 0;
    var m,n;

    initMap();
    food();

    $('body').keydown(function (e) {
        if(e.keyCode === 37) { //right
            dir = 4;
        }
        if(e.keyCode === 38) { //up
            dir = 1
        }
        if(e.keyCode === 39) { //left
            dir = 2;
        }
        if(e.keyCode === 40) { //down
            dir = 3;
        }
    })

    $('#start').click(function () {
        start()
    })

    function initMap() {
        for(var i = 0; i < ck; i++) {
            var tr = document.createElement("tr");
            var trs = [];
            for(var j = 0; j < ck; j++) {
                var td = document.createElement('td');
                trs[j] = td;
                tr.appendChild(td);
            }
            $('#container').append(tr);
            allTds[i] = trs;
        }

        for(var g = 0; g < k; g++) {
            she[g] = allTds[0][g];
            allTds[0][g].className = "hei";
        }

        console.log(she)
    }

    function hide(el) {
        el[0].className = 'bai';
    }

    function show(el) {
        el[el.length - 1].className = 'hei';
    }

    function start() {
        if (dir === 1) {
            if ((x - 1) >= 0) {
                if(eatSelf(allTds[x-1][y])) {
                    hide(she)
                    if((x - 1) === m & y === n) {
                       eatFood()
                   } else {
                       for(var o=0;o<she.length-1;o++) {
                           she[o] = she[o+1];
                       }
                       she[k-1] = allTds[x-1][y];
                   }
                   show(she)
                    x -= 1;
                    ji = setTimeout(function() {
                        start()
                    }, 200);
                } else {
                    alert('eat top')
                }
            } else {
                alert('top')
            }
        }
        if (dir === 2) {
            if ((y + 1) < ck) {
                if(eatSelf(allTds[x][y+1])) {
                    hide(she)
                    if(x === m && (y + 1) === n) {
                        eatFood()
                    } else {
                        for(var o=0;o<she.length-1;o++) {
                            she[o] = she[o+1];
                        }
                        she[k-1] = allTds[x][y+1];
                    }
                    show(she)
                    y += 1;
                    ji = setTimeout(function() {
                        start()
                    }, 200);
                } else {
                    alert('eat right')
                }
            } else {
                alert('right ')
            }
        }
        if (dir === 3) {
            if ((x + 1) < ck) {
                if(eatSelf(allTds[x+1][y])) {
                    hide(she)
                    if((x + 1) === m && y === n) {
                        eatFood()
                    } else {
                        for(var o=0;o<she.length-1;o++) {
                            she[o] = she[o+1];
                        }
                        she[k-1] = allTds[x+1][y];
                    }
                    show(she)
                    x+=1;
                    ji = setTimeout(function() {
                        start()
                    }, 200);
                } else {
                    alert('eat bottom')
                }
            } else {
                alert('bottom')
            }
        }
        if (dir === 4) {
            if ((y - 1) >= 0) {
                if(eatSelf(allTds[x][y-1])) {
                    hide(she)
                    if(x === m && (y-1) === n) {
                        eatFood()
                    } else {
                        for(var o=0;o<she.length-1;o++) {
                            she[o] = she[o+1];
                        }
                        she[k - 1] = allTds[x][y-1];
                    }
                    show(she)
                    y -= 1;
                    ji = setTimeout(function() {
                        start()
                    }, 200);
                } else {
                    alert('eat left')
                }

            } else {
                alert('left')
            }
        }

    }

    function stop() {
        if(ji !== null) {
            clearTimeout(ji)
        }
    }

    function eatSelf(ch) {
        var flag = true;
        for(var i = 0; i < she.length; i++) {
            if(she[i] == ch) {
                flag = false;
            }
        }
        return flag;
    }

    function eatFood() {
        console.log('eat food')
        she[she.length] = allTds[m][n];
        k += 1;
        mark += 1;
        food();
        console.log(k)
    }

    function food() {
        console.log('food')
        m = Math.floor(Math.random()*ck);
        n = Math.floor(Math.random()*ck);
        if(allTds[m][n].className === 'hei') {
            console.log('in if')
            food()
        } else {
            allTds[m][m].className = 'red';
        }
    }
});



