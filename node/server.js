const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended : true}));

let db;
MongoClient.connect('mongodb+srv://admin_jb:doslzja15@cluster0.e1hz11b.mongodb.net/?retryWrites=true&w=majority',function(err, client){
   
    db = client.db('todoapp');

    

    app.listen(8080, function(){
        console.log('listening on 8080')
    });
});

app.post('/add',function(req,res){
    console.log('add 됨')
    db.collection('post').insertOne({이메일 : req.body.email, 텍스트 : req.body.txtarea}, function(err, result){
        console.log('SAVE');
    })
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
});
app.get('/list',function(req,res){
    res.render('list.ejs');
})