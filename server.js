//Install express server
const express = require('express');
const path = require('path');
const app = express();
const { Client  } = require('pg');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/my-portfolio'));

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();
client.query('SELECT * FROM public.job;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
app.get('/api/forms', (req, res) => {
    res.send("api works")
})

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);