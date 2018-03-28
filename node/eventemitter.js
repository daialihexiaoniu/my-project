var EventEmitter = require('events');
var util = require('util');

var MyEmitter = function() {

};

util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
    // Prints: a b {}
});

myEmitter.emit('event', 'a',  'b');


// promise
var promise = new Promise((resolve, reject) => {
    // do a thing, possibly async, then ....
    if(true) { // everrything turned out fine
        resolve('Stuff worked');
    } else {
        reject(Error('it broke'));
    }
})

promise.then((test) => {
    console.log(test)
    return Promise.reject(new Error('aaaa'))
}).catch((err) => {
    console.log(err)
})