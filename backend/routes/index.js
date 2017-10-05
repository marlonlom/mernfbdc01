var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

const url = "mongodb://165.227.187.208:4536/agenda";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

function getAgenda(callback) {
  mongodb.connect(url, (err, db) => {
    if (err) throw err;
    var agenda = db.collection("agenda");
    agenda.find({}).toArray((err2, agenda) => {
      if (err2) throw err;
      callback();
    });
  });
}

router.get('/agenda', (req, res) => {
  getAgenda((agenda) => {
    console.log({a:agenda});
    res.json(agenda);
  });
});

/*Export module*/
module.exports = router;
