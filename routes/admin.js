var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource a');
});

router.get('/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
}, function (req, res, next) {
    res.send('User Info')
});

module.exports = router;

