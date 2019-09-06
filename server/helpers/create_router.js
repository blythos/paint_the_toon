const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const dealWithError = function(err, res) {
  res.status(500);
  res.json({status:500, error: err})
};

const createRouter = function (collection) {

  const router = express.Router();

  // INDEX
  router.get('/', (req, res) => {
    collection.find().toArray()
    .then(docs => res.json(docs))
    .catch(err => dealWithError(err, res))
  });

  // SHOW
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection.findOne({ _id: ObjectID(id) })
    .then(doc => res.json(doc))
    .catch(err => dealWithError(err, res))
  });

  // CREATE
  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection.insertOne(newBooking)
    .then(doc => res.json(doc.ops[0]))
    .catch(err => dealWithError(err, res));
  });

  // DESTROY
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection.deleteOne({ _id: ObjectID(id) })
    .then(doc => res.json(doc))
    .catch(err => dealWithError(err, res));
  });

  // UPDATE
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedBooking = req.body;
    collection.findOneAndUpdate(
      { _id: ObjectID(id)},
      {$set: updatedBooking},
      {returnOriginal: false}
    )
    .then(result => res.json(result.value))
    .catch(err => dealWithError(err, res));
  });



  return router;
}

module.exports = createRouter;
