var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
   let challenge=req.body.challenge;
   res.status(200).send({challenge})

});

module.exports = router;