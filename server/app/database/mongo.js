"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @des 采用mongoose的方式访问数据库
 */
const mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/mydatabase', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// });
mongoose_1.default.connect('mongodb://localhost:27017/myDatabase');
exports.default = {
    insert(sql) {
        // console.log(1111, sql);
        // return crud(sql, 'insert')
    },
    async query() {
        // return crud(sql)
        const Cat = mongoose_1.default.model('users', { name: String });
        const result = await Cat.find({});
        return result;
        // const kitty = new Cat({ name: 'Zildjian' });
        // kitty.save().then(() => console.log('meow'));
    }
};
