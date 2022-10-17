const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/movies', function (req, res) {
   let movies1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   res.send(movies1);
});

router.get('/movies/:indexNumber', function (req, res) {
    let movies1 = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
    let params1 = req.params.indexNumber;
    if (params1 > 3) {
        res.send(' Use a valid index')
    }
    res.send(movies1[(params1)]);
 });

 router.get('/films', function (req, res) {
   let films1 = [ {
    id: 1,
    name: 'The Shining'
   }, {
    id: 2,
    name: 'Incendies'
   }, {
    id: 3,
    name: 'Rang de Basanti'
   }, {
    id: 4,
    name: 'Finding Nemo'
   }]
   res.send(films1);
 });

 router.get('/films/:filmId', function (req, res) {
    let films1 = [ {
     id: 1,
     name: 'The Shining'
    }, {
     id: 2,
     name: 'Incendies'
    }, {
     id: 3,
     name: 'Rang de Basanti'
    }, {
     id: 4,
     name: 'Finding Nemo'
    }]
   
    let params2 = req.params.filmId;
    if (params2 == 1) {
        res.send(films1[0])
    } else if (params2 == 2) {
        res.send(films1[1])
    } else if (params2 == 3) {
        res.send(films1[2])
    } else if (params2 == 4) {
        res.send(films1[3])
    } else {
        res.send('No movie exists with this id')
    }
  });


module.exports = router;