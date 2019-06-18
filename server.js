//Install express server
const express = require('express');
const path = require('path');
const app = express();
const { Client } = require('pg');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/dist/my-portfolio'));

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();

app.get('/api/forms', (req, res) => {
    client.query('SELECT * FROM public.job;', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
})
// app.post('/api/form', (req, res) => {
//     var myTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
//     client.query('INSERT INTO job (company, email, url, timestamp) VALUES (?, ?, ? ,?);',(req.body.company,req.body.email,req.body.url, myTimestamp), (err, result) => {
//         res.json({data: req.body});
//     });
//     client.end();
// })
app.post('/api/form', (req, res) => {
    res.json({
        data: req.body
    })
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);