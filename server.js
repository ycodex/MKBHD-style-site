var express = require('express');
const pug = require('pug');
var app = express();

//const compiledFunction = pug.compileFile('index.pug');


var port =process.env.PORT || 8080
app.set('view engine', 'pug');
app.use(pug.compile());
app.use(express.static(__dirname));
app.get("/",function(req, res){
    res.render("index");
})

app.listen(port,function(){
    console.log("run");
})