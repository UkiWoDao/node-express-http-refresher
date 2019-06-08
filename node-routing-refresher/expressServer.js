// http is a native module, comes with node
// express is not, it's third party, hence install
const express = require('express'),
      // for absolute pathing
      path = require('path'),
      app = express();
// we can do above like this const app = require('express')();
// express.js dependency that we require returns crateApplication object

app.use(express.static('public'));

// all method takes 2 params (route, callback())
app.all('/', (req, res) => {
    // express handles headers

    console.log(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    // express handles end - res.end() not needed
});

// method only executes if a request doesn't match the above app.all('/', ...
app.all('*', (req, res) => {
    res.send('Error, no such page');
})

const port = 3000;
app.listen(port);
console.log('Server running on port ' + port);
