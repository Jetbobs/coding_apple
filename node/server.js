const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({extended : true}));
MongoClient.connect('mongodb+srv://admin_jb:doslzja15@cluster0.e1hz11b.mongodb.net/?retryWrites=true&w=majority',function(err, client){
    app.listen(8080, function(){
        console.log('listening on 8080')
    });
});

app.get('/pet',function(req, res){
    res.send('펫 용품을 쇼핑할 수 있는 페이지입니다.')
})
app.get('/beauty', function(req,res){
    res.send('뷰티용품 쇼핑 페이지임')
})
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})
app.get('/write',function(req,res){
    res.sendFile(__dirname + '/write.html')
})
app.post('/add',function(req,res){
    res.send('전송완료')
    console.log(req.body.txtarea)
})