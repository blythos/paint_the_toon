use test_db;
db.dropDatabase();

db.testing.insertMany([
  {
    name: "Hello world",
    testing: "this"
    },
  {
    testing: "that",
    time: "now"
    },
  {
    testData: "lorem ipsum"
    },
  {
    name: "Yes",
    aNumber: 324,
    anObject: {
      anotherNumber: 5.2
    }
  }
]);
