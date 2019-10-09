'use strict';
//Install express server
const express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const app = express();
const { Client } = require('pg');


var crypto = require('crypto');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/my-portfolio'));

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
client.connect();

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};
/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};
var saltHashPassword = function (userpassword) {
    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var passwordData = sha512(userpassword, salt);
    return passwordData;
}
app.post('/api/user', (req, res) => {
    client.query('SELECT * FROM public.user WHERE username = ($1)',[req.body.username], (err, results) => {
        if (err){
          throw err;  
        } 
        var passwordData = sha512(req.body.password,results.rows[0].salt);
        if(passwordData.passwordHash == results.rows[0].password){
            res.status(201).send({sucess: true, msg:"Login successfully"});
            client.end();
        }else{
            res.send({sucess: false, msg:"Login unsuccessfully"});
        }
    });
});

app.get('/api/all', (req, res) => {
    client.query('SELECT * FROM public.job', (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    });
});

app.post('/api/form', (req, res) => {
    client.query('INSERT INTO public.job (company, email, url, job_comment, created_since) VALUES ($1, $2, $3, $4, $5)',[req.body.company,req.body.email,req.body.url,req.body.comment, new Date()], (err, results) => {
        if (err){
          throw err;  
        } 
        res.status(201).send({msg:'New form added successfully'});
        client.end();
    });
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/my-portfolio/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);