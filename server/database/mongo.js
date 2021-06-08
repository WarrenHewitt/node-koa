"use strict";
/**
 * @des 采用mongoose的方式访问数据库
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
exports.default = {
    insert(sql) {
        // console.log(1111, sql);
        // return crud(sql, 'insert')
    },
    query() {
        return __awaiter(this, void 0, void 0, function* () {
            // return crud(sql)
            const Cat = mongoose.model('users', { name: String });
            const result = yield Cat.find({});
            console.log(result);
            return result;
            // const kitty = new Cat({ name: 'Zildjian' });
            // kitty.save().then(() => console.log('meow'));
        });
    }
};
//# sourceMappingURL=mongo.js.map