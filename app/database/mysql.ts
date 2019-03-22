import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'database-test'
})

connection.connect();

connection.query('SELECT * FROM city', function(error, results, fields) {
    if (error) throw error
    console.log(results[0].name);
})

connection.end()
