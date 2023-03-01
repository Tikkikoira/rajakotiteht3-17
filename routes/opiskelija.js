const express = require('express');
const router = express.Router();
const opiskelija = require('../models/opiskelija_model');

router.get('/', (request, response) => {
        opiskelija.getAll(function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                console.log(dbResult);
                response.json({count: dbResult.length,dbResult});
            }
        })
    });

router.get('/:id',
    function (request, response) {
        opiskelija.getById(request.params.id, function (err, dbResult) {
            if (err) {
                response.json(err);
            } else {
                response.json(dbResult);
            }
        })
    });


router.post('/', 
function(request, response) {
    const newOpiskelija = {
        Etunimi: request.body.Etunimi, 
        Sukunimi: request.body.Sukunimi,
        Osoite: request.body.Osoite,
        Luokkatunnus: request.body.Luokkatunnus
    }
    if (newOpiskelija.Etunimi === undefined || newOpiskelija.Sukunimi === undefined || newOpiskelija.Osoite === undefined || newOpiskelija.Luokkatunnus === undefined) {
        response.status(400).json({message: "Ei muuten toimi näi"})
    }
  opiskelija.add(newOpiskelija, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(newOpiskelija);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  opiskelija.delete(request.params.id, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});


router.put('/:id', 
function(request, response) {
  opiskelija.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

module.exports = router;