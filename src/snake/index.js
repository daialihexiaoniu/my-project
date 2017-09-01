$(function () {
    var dir = 2;//up:1 right:2 down:3 left:4
    var allTds = [];
    var ck =30;
    var k = 3;
    var she = [];
    var x = 0, y = k-1;
    var ji = null;
    var mark = 0;

    initMap();

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
            var tr = document.getElementById("container").insertRow(-1);;
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
    }

    function hide(el) {
        el[0].className = 'bai';
    }

    function show(el) {
        el[el.length - 1].className = 'hei';
    }

    function start() {
        console.log('start')
        hide(she);
        for(var o = 0; o < she.length; o++) {
            she[o] = she[o + 1]
        }
        if (dir === 1) {
            if (x - 1 >= 0) {
                she[k-1] = allTds[x-1][y];
                x-=1;
            } else {
                alert('top')
            }
        }
        if (dir === 2) {
            if (y + 1 < ck) {
                she[k-1] = allTds[x][y+1];
                y+=1;
            } else {
                alert('right ')
            }
        }
        if (dir === 3) {
            if (x + 1 < ck) {
                she[k-1] = allTds[x+1][y];
                x+=1;
            } else {
                alert('bottom')
            }
        }
        if (dir === 4) {
            if (y - 1 >= 0) {
                she[k - 1] = allTds[x][y-1];
                y -=1;
            } else {
                alert('left')
            }
        }
        show(she);
        setTimeout(function() {
            start()
        }, 200);
    }

    function stop() {
        if(ji !== null) {
            clearTimeout(ji)
        }
    }

});



