require('dotenv').config();
const express = require('express');
const app = express();

// non persistent storage for mock data
var storage = {};

// is needed to retrieve json data from patch requests
app.use(express.json());
// may be used for validation
app.use(express.urlencoded());


// this is a route to completely wipe the storage
app.delete('*', (req, res) => {
    storage = {};
    res.json({"storage": "deleted"});
});

// this will put the sended json data into the storage with route as key
app.patch('*', (req, res) => {
    storage[req.url] = req.body;
    res.json({"thank":"you"});
});

// this will send the stored json data from the storage with route as key
app.all('*', (req, res) => {
    data = storage[req.url] || {};
    res.json(data);
});


port = process.env.PORT
app.listen(port);