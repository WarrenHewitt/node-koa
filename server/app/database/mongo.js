"use strict";
/**
 * @des 采用mongoose的方式访问数据库
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
exports.default = {
    insert(sql) {
        // console.log(1111, sql);
        // return crud(sql, 'insert')
    },
    async query() {
        // return crud(sql)
        const Cat = mongoose.model('users', { name: String });
        const result = await Cat.find({});
        return result;
        // const kitty = new Cat({ name: 'Zildjian' });
        // kitty.save().then(() => console.log('meow'));
    }
};
