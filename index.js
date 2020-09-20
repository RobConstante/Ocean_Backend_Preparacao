const express = require('express');
const app = express();

// (async () => {

/*
// Retrieve
const MongoClient = require('mongodb').MongoClient;

console.info('Connecting to MongoDB database...');

// Connect to the db
const client = await MongoClient.connect('mongodb://localhost:27017/',
    { useUnifiedTopology: true },
);

const db = client.db('ocean-preparacao');

const collection = db.collection('example');

const { insertedCount } = await collection.insertOne({
    a: 1
});

const result = await collection.countDocuments({});

console.log(result);
*/

app.get('/', function (req, res) {
    res.send('Hello World');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

// })();
