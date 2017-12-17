import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
import colors from 'colors';

/* eslint-disable no-console */

const port = 8081;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

console.log("RAPP:now starting".blue);
console.info(`listening on port: ${port}`);

app.listen(port, function (err) {
  if (err) {
    console.log("RAPP:port already open");
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});