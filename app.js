const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const Report = require('./models/report');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

const dbURI = 'mongodb+srv://ProjectDB:test1234@cluster0.ithc9yt.mongodb.net/Project?retryWrites=true&w=majority';

// Connect to the database then listen to any request or print error if failed.
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// Get Requests

app.get('/', (req, res) => {
    res.redirect('/reports');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/help', (req, res) => {
    res.render('help', { title: 'Help' });
});

// report routes
app.use('/reports', reportRoutes);


// Error 404 Page
app.use((req, res) => {
    res.status(404).render('404', { title: 'Not found' });
});

