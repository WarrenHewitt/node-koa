import mongoose from '../database/mongo'

const getUsers = () => {
    return mongoose.query()
}

export default  (router: any) => {
    /**
     * @des 查询接口
     */
    router.get('/api/users/', async (ctx: any) => {
        const result = await getUsers()
        ctx.response.body = result
    })
}
