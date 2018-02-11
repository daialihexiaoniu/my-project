// const exec = require('child_process').exec;
const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');

const start = ((response) => {
    console.log('Request handler "start" was called');

    const body = `
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html charset=UTH-8">
    </head>
    <body>
        <form action="/upload" enctype="multipart/form-data" method="post">
            <input type="file" name="upload"></input>
            <input type="submit" value="Upload file"></input>
        </form>
    </body>
    </html>
    `

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
})

const upload = ((response, request)=> {
    console.log('Request handler "upload" was called');

    const form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(request, (error, fileds, files) => {
        console.log('parsing done');
        fs.renameSync(files.upload.path, 'tmp/test.jpg');
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('received image: <br/>');
        response.write('<img src="/show" />');
        response.end();
    })
})

const show = ((response, postData) => {
    console.log('Request handler "show" was called');
    fs.readFile('/tmp/test.jpg', 'binary', (error, file) => {
        if(error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + '\n');
            response.end(); 
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(file, 'binary');
            response.end();
        }
    })
})

exports.start = start;
exports.upload = upload;
exports.show = show;

// const start = (() => {
//     console.log('Request handler start was called');
//     return 'Hello Start';
// })

// const upload = (() => {
//     console.log('request handler upload was called');
//     return 'Hello Upload'
// })

// exports.start = start;
// exports.upload = upload;
