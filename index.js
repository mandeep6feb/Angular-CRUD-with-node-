const express = require('express');
const app = express();
const router = express.Router({mergeParams: true});
const bodyParser = require('body-parser');
let http = require('http');
let core = require('cors');
let server = http.Server(app);

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/form', (err) => {
    if(!err)
    console.log('MongoDB Connection Succeeded');
    else
    console.log('Error In MongoDB Connection : ', JSON.stringify(err, undefined, 2));
});

let about = require('./router/form_route');
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(core());
app.use('/api', about);
server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
