const express = require('express');
const app = express();
const path = require('path');

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// ForceSSL middleware
app.use(forceSSL());
app.use(express.static(__dirname + '/dist'));
app.listen(8080, function(){
    console.log(this.address().port, app.settings.env);
}
);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});