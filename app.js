var express = require('express');
var app = express();

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use('/public', express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/', indexRouter);
app.use('/login', loginRouter);

app.listen(3000, function () {
    console.log('3000port start..')
});