const express = require('express'),
      app = express();

// makes express serve whatever is in public directly as part of root - no need to go localhost:3000/public/blahblah
app.use(express.static('public'))

app.listen(3000);
console.log('Server started on port 3000');
      