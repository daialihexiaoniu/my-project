$(function () {
    var dir = 1;//up:1 right:2 down:3 left:4
    var allTds = [];
    var ck =30;
    var k = 3;
    var she = [];
    var x = 0, y = k-1;



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

    function initMap() {
        for(var i=0; i< ck; i++) {
            var tr = document.createElement('tr');
            var trs = [];
            for(var j=0; j<ck; j++) {
                var td = document.createElement('td');
                trs[j] = td;
                tr.appendChild(td);
            }
            $('#container').append(tr);
            allTds[i] = trs;
        }
    }
});



