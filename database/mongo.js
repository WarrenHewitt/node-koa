const MongoClient = require('mongodb').MongoClient;
// const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'myDB';
// Connect using MongoClient
MongoClient.connect(url, function (err, client) {
    // Use the admin database for the operation
    const adminDb = client.db(dbName).collection('users');
    // List all the available databases
    adminDb.findOne({name:'hew'},function (err, dbs) {
        console.log(dbs)
        // test.equal(null, err);
        // test.ok(dbs.databases.length > 0);

        client.close();
    });
});