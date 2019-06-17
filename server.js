//Install express server
const express = require('express');
const path = require('path');
const app = express();
const { Client  } = require('pg');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/dist/my-portfolio'));

const client = new Client({
  connectionString: 'postgres://xobkypwdmxwnxx:2af823a29661ed2051fdf9c7339ed08d0dea08dc3203987d40da275842dd3f42@ec2-23-21-91-183.compute-1.amazonaws.com:5432/d59f1gjjltj1so',
  ssl: true,
});
client.connect();

app.get('/api/forms', (req, res) => {
    client.query('SELECT * FROM public.job;', (err, result) => {
        if (err) throw err;
        res.json(result);
        client.end();
    });
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);