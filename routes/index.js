var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '2007 E 9th - Home' });
});

router.get('/dining', function(req, res) {
  res.render('dining', { title: '2007 E 9th - Dining Room' });
});

router.get('/kitchen', function(req, res) {
  res.render('kitchen', { title: '2007 E 9th - Kitchen' });
});

router.get('/living', function(req, res) {
  res.render('living', { title: '2007 E 9th - Living Room' });
});

router.get('/loft', function(req, res) {
  res.render('loft', { title: '2007 E 9th - Upstairs Loft' });
});

router.get('/laundry', function(req, res) {
  res.render('laundry', { title: '2007 E 9th - Laundry Room / Garage' });
});

router.get('/bed_master', function(req, res) {
  res.render('bed_master', { title: '2007 E 9th - Master Bedroom' });
});

router.get('/bed_guest', function(req, res) {
  res.render('bed_guest', { title: '2007 E 9th - Guest Bedroom' });
});

router.get('/bath_master', function(req, res) {
  res.render('bath_master', { title: '2007 E 9th - Master Bath' });
});

router.get('/bath_guest', function(req, res) {
  res.render('bath_guest', { title: '2007 E 9th - Guest Bath' });
});

router.get('/bath_half', function(req, res) {
  res.render('bath_half', { title: '2007 E 9th - 1st Floor Half Bath' });
});

module.exports = router;
