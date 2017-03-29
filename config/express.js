var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');
var expressSession = require('express-session');

var app = express();

app.use(expressSession({secret: 'm5y4S3e2c1r0e1K2e3y45'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

consign({ cwd: 'app' })
	.include('models')
	.then('api')
	.then('routes')
	.into(app);

module.exports = app;
