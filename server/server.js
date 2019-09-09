const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('mural_trail');
  const trailCollection = db.collection('trail');
  const trailRouter = createRouter(trailCollection)
  app.use('/api/trail', trailRouter);

  const userCollection = db.collection('user');
  const userRouter = createRouter(userCollection)
  app.use('/api/user', userRouter);

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
