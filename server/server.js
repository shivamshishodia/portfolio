// Use express to run the application
var express = require('express');
var app = express();

const path = require('path');

// Assign port and point to the build folder (ng build)
const PORT = process.env.PORT || 4200;
var app_path = '../dist/docs';

// Use SSL (not in localhost)
const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// app.use(forceSSL());

// Start the server
// Usage: ng build > node .\server\server.js
app.use('/', express.static(path.join(__dirname, app_path)))
  .get('*', (req, res) => res.sendFile(path.join(__dirname, app_path + '/index.html')))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
