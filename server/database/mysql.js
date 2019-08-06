"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123456',
    database: 'database-test'
});
connection.connect();
<<<<<<< HEAD
const crud = function (sql, type = 'query') {
    return new Promise((resolve) => {
        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            if (type === 'insert') {
                resolve(true);
            }
            else {
                resolve(results);
            }
        });
    });
};
exports.default = {
    insert(sql) {
        console.log(1111, sql);
        return crud(sql, 'insert');
    },
    query(sql) {
        return crud(sql);
    }
};
=======
connection.query('SELECT * FROM city', function (error, results, fields) {
    if (error)
        throw error;
    console.log(results[0].name);
});
connection.end();
>>>>>>> 63f0736f3a532c4f7276dafd607d95eb060cd7af
//# sourceMappingURL=mysql.js.map