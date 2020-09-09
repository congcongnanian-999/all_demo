var express = require('express')

var app = express()

app.get('/',(req,res)=>{
  res.writeHead(200,{"Content-Type":"text/html"});
  res.write('hello world');
})


app.listen(3000, (err, res)=>{
  console.log('启动成功')
})
