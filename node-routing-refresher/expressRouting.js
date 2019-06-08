const express = require('express'),
      app = express();

// HTTP / REST main verbs: GET (for requesting), POST (for submitting), DELETE, PUT (for updating)
app.get('/', (req, res)=>{
    res.send('works');
})

const port = 3000;
app.listen(port);
console.log('Server running on port ' + port);
