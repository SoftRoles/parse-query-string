const express = require('express');
const freePort = require("find-free-port")
var app = express();

//=========================================
// authorization check
//=========================================
const parseQueryString = require('../')

app.use(parseQueryString());
app.use(require('morgan')('tiny'));

app.get('/', (req, res) => {
  console.log(req.query)
  res.send({})
})

freePort(3000, function (err, port) {
  app.listen(port, function () {
    console.log("Service running on http://127.0.0.1:" + port)
  })
})
