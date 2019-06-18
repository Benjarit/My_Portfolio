//Install express server
const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const app = express();
const { Client } = require('pg');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/my-portfolio'));

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();

app.get('/api/all', (req, res) => {
    client.query('SELECT * FROM public.job', (err, results) => {
        if (err) throw err;
        res.json(results.rows);
        client.end();
    });
});

app.post('/api/form', (req, res) => {
    client.query('INSERT INTO public.job (company, email, url, created_since) VALUES ($1, $2, $3, $4)',[req.body.company,req.body.email,req.body.url, new Date()], (err, results) => {
        if (err){
          throw err;  
        } 
        res.json({data: results});
        client.end();
    });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);