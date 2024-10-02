const express = require('express');
const Report = require('../models/report');

const router = express.Router();


// Show all entries
router.get('/', (req, res) => {
    Report.find()
        .then((result) => {
            res.render('index', { title: 'All reports', reports: result })
        })
        .catch((err) => {
            console.log(err);
        });
});

// Create a new entry
router.get('/create', (req, res) => {
    res.render('create', { title: 'Create' });
});


// Post request/create
router.post('/create', (req, res) => {
    const report = new Report(req.body);

    report.save()
        .then((result) => {
            res.redirect('/reports');
        })
        .catch((err) => {
            console.log(err);
        })
});

// Get a single entry
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Report.findById(id)
        .then(result => {
            res.render('details', {report: result, title: 'Entry Data'});
        })
        .catch(err => {
            console.log(err);
        })
});

// Delete request

router.delete('/:id', (req, res) => {
    const id = req.params.id;
     
    Report.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/reports' })
        })
        .catch(err => {
            console.log(err);
        })
})

// Put/Update request

router.post('/:id', (req, res) => {
    const id = req.params.id;
    const newreport = {
        name: req.body.name,
        eduDur: req.body.eduDur,
        shopDur: req.body.shopDur,
        browseDur: req.body.browseDur,
        socialDur: req.body.socialDur,
        date: req.body.date
    };
    
    Report.findByIdAndUpdate(id, newreport)                                          
        .then(result =>{
            res.redirect('/reports');
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router; 