const functions = require('firebase-functions');
const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.sendFile('../public/index');
});


exports.app = functions.https.onRequest(app);
