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
//# sourceMappingURL=mysql.js.map