import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123456',
    database: 'database-test'
})
connection.connect();

const crud = function(sql:string, type = 'query') {
    return new Promise((resolve) => {
        connection.query(sql, function(error:any, results: any, fields:any) {
            if (error) throw error
            if(type === 'insert') {
                resolve(true)
            } else {
                resolve(results)
            }
        })
    })
}

export default {
    insert(sql:string) {
        console.log(1111, sql);
        return crud(sql, 'insert')
    },

    query(sql:string) {
        return crud(sql)
    }
}
