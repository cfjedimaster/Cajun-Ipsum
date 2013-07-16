var express = require('express');
var app = express();

var cajunProvider = require('./cajunIpsum');
//var ArticleProvider = require('./articleprovider-mongo').ArticleProvider;
//app.set('articleProvider',new ArticleProvider('localhost',27017));

var hbs = require('hbs');

app.configure(function() {
    app.set('view engine', 'html');
    app.engine('html', hbs.__express);
    
    app.use("/public",express.static(__dirname + '/public'));
    
    app.use(express.bodyParser());
    
	//app.use(express.favicon(__dirname + '/public/favicon.ico'));
});

app.configure('development', function() {
    app.use(express.errorHandler());
});

app.locals({
    title:"Cajun Ipsum"
});

app.get('/', function(req,res) {
	res.render('index');
});

app.get('/gen', function(req,res) {
	var paras = Number(req.query.total);
	if(paras == 0) paras = 1;
	res.send(cajunProvider.generate(paras));
});


app.listen(process.env.VCAP_APP_PORT || 3000);
