var http = require("http");

function process_request(req, res) {
    var body = 'Thanks for calling!\n';
    var content_length = body.length;
    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(process_request);
s.listen(8080);


/*node debug bebugging.js  //node内置的调试器  需要在文件名前加入 debug

cont -----继续执行

next----跳到下一个语句

step ----进入当前函数

out---跳出当前执行函数

repl ---启动 node repl，允许查看变量值和执行代码

setBreakpoint（x）---   设置断点*/