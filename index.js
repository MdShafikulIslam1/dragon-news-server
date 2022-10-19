const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const category = require('./data/categories.json');

app.use(cors())
app.get('/', (req, res) => {
    res.send('This is news portal server port:')
})

app.get('/news-categories', (req, res) => {
    res.send(category)
})

app.listen(port, () => {
    console.log('this is news portal server')
})