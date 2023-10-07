
const express = require('express');
const app = express();
const port = 5000;
//----------------------------------------------------------------------------------------->
//--------------------------Esau Maldonado Aguiar 301267933------------------------------>
//----------------------------------------------------------------------------------------->

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/about', (req, res) => res.render('about'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/service', (req, res) => res.render('service'));

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
