var express = require('express');
var app = express();
 
 
app.use(express.static('../src/assets'));

var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})



app.get('/process_get',urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})