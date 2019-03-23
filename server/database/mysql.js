"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'database-test'
});
connection.connect();
connection.query('SELECT * FROM city', function (error, results, fields) {
    if (error)
        throw error;
    console.log(results[0].name);
});
connection.end;
//# sourceMappingURL=mysql.js.map