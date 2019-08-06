import DBOperate from '../../database/mysql'
import { formatReturnData } from '../../utils/common'

export default{
    async getCompany(ctx:any){
        try {
            const results = await DBOperate.query('SELECT * FROM company')
            ctx.response.body= formatReturnData(results)
        } catch (error) {
            ctx.response.body= formatReturnData({}, 1, '查询错误')
            console.log('获取company：', error);
        }
    },

    async getProducts(ctx:any){
        try {
            const products = await DBOperate.query('SELECT * FROM product')
            ctx.response.body= formatReturnData(products)
        } catch (error) {
            ctx.response.body= formatReturnData({}, 1, '查询错误')
            console.log('获取products：', error);
        }
    },

    async productUpdate(ctx:any){
        const { product, change } = ctx.request.body
        const id = Math.random().toString().substr(2, 10)
        try {
            const results = await DBOperate.insert(`INSERT INTO income(id, product, \`change\`, total) VALUES (${id}, ${product}, ${change}, 888)`)
            ctx.response.body= formatReturnData(results)
        } catch (error) {
            ctx.response.body= formatReturnData({}, 1, '插入错误')
            console.log('获取company：', error);
        }
    }   
}