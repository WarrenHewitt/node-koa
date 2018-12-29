const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'

const databaseName = 'localTestDB'

const client = new MongoClient(url, {
    useNewUrlParser: true
})

client.connect(function (err) {
    assert.equal(null, err)
    console.log('connect success!');

    const db = client.db(databaseName)

    client.close()
})

const find = () => {
    
}

module.exports =  function() {

}