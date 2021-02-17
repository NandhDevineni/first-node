const express = require('express');
const PORT = 3000;
const app = express();

app.get('/hello', (req, res, next) => {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});



app.listen(PORT, () => {
    console.log('server running on port ' + PORT);
});