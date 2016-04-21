'use strict';

const PORT = process.env.PORT || 3000;

let jade = require('jade');
let http = require('http');
let qs = require('qs');
var moment = require("moment");
let nodeStatic = require('node-static');
let file = new nodeStatic.Server('./public')



http.createServer((req, res) => {
//   var now = moment(new Date());
//   res.write(now.toString())
// var date = now.format("D MMM YYYY");
// console.log(date);
  switch(req.url) {
    case '/':
      var html = jade.renderFile('./views/index.jade', {
        title: 'Message Board'

      });
      res.end(html);
      break;

      case '/contact':
      var html = jade.renderFile('./views/contact.jade', {
        title: 'Jade App'
      });
      res.end(html);
      break;
  }

  file.serve(req, res);

})
.listen(PORT, err => {
  if(err) return console.log(err);
  console.log(`Node server listening on port ${PORT}`);
});
