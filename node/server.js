const http = require("http"); // 请求node自带的http模块
const url = require("url");

/**
 * node.js 是事件驱动的
 * createServer 返回一个对象，
 * 含有listen方法， listen有个参数，指定http服务器监听的端口号。
 */

const start = ((route, handle) => {
    const onRequest = ((request, response) => {
        // let postData = "";
        const pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname + " received.");

        route(handle, pathname, response, request);

        // request.setEncoding('utf8');
        // request.addListener('data', (postDataChunk) => {
        //     postData += postDataChunk;
        //     console.log('received Post data chunk' + postDataChunk + '.');
        // })

        // request.addListener('end', () => {
        //     route(handle, pathname, response, postData);
        // })
    })
    
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.")
})

exports.start = start;