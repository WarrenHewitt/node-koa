const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'

const databaseName = 'localTestDB'

const client = new MongoClient(url, {
    useNewUrlParser: true
})

class MongoDB {
    async findOne() {
        try {
            await client.connect()
            console.log('connect success!')
            
            const db = client.db(databaseName)

            const col = db.collection('users')
            
            const r = await col.find({city: '成都'}).toArray()
            console.log('find results:', r);
        
            client.close()
            return r
            

    
        } catch (err) {
            console.log('error', err)
        }
    }
}

module.exports = new MongoDB()