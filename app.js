/* eslint no-console: 0 */

const path = require('path');
const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

console.log('test');

app.use(express.static(__dirname + '/public'));//TODO Why doesnt express load these static files
if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', function response(req, res) {
    //res.send();
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'public/index.html')));
    res.end();
  });
  // app.get('/bootstrap.min.css', function response(req, res){
  //   res.set('content-type','text/css');
  //   res.send(fs.readFileSync(path.join(__dirname,'public/css/bootstrap.min.css')));
  //   //res.end();
  // });
  // app.get('/simple-line-icons.css', function response(req, res){
  //   res.set('content-type','text/css');
  //   res.send(fs.readFileSync(path.join(__dirname,'public/css/simple-line-icons.css')));
  //   //res.end();
  // });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(port, '127.0.0.1', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
