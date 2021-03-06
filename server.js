// Generated by CoffeeScript 1.6.3
var api, app, ejs, express, http, path, routes;

express = require('express');

routes = require('./routes');

api = require('./routes/api');

http = require('http');

path = require('path');

ejs = require('ejs');

app = module.exports = express();

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');

app.engine('html', ejs.renderFile);

app.use(express.logger('dev'));

app.use(express.bodyParser());

app.use(express.methodOverride());

app.use(express["static"](path.join(__dirname, 'public')));

app.use(app.router);

if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/partials/:name', routes.partials);

app.get('/api/name', api.name);

app.get('/api/events', api.events);

app.get('/api/slides', api.slides);

app.get('/api/features', api.features);

app.get('*', routes.index);

app.listen(app.get('port'), function() {
  return console.log('Express server listening on port ' + app.get('port'));
});
