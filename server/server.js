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

  const db = client.db('RENAME');
  const RENAMECollection = db.collection('RENAME');
  const RENAMERouter = createRouter(RENAMECollection)
  app.use('/api/RENAME', RENAMERouter);

  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
