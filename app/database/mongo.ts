/**
 * @des 采用mongoose的方式访问数据库
 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true, useUnifiedTopology: true});


export default {
    insert(sql:string) {
        // console.log(1111, sql);
        // return crud(sql, 'insert')
    },

    async query() {
        // return crud(sql)
        const Cat = mongoose.model('users', { name: String });
        const result = await Cat.find({})
        console.log(result);
        return result
        // const kitty = new Cat({ name: 'Zildjian' });
        // kitty.save().then(() => console.log('meow'));
    }
}