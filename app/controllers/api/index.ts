import path from 'path'

/**
 * @des 操作 multipart/form-data 
 */
import multer from 'koa-multer'

/**
 * @des 当没有默认导出时要用 * 防止报错
 */
import * as file from './file'
import * as api from './api'
import * as restFul from './restFul'
// import financial from './financial'

const upload = multer({ dest: path.join(__dirname + '/uploadFiles/') })

export default (router: any) => {
    /**
     * @des 测试restFul 接口, 以及参数的获取
     */
    router.get('/api/resF/', restFul.restGet)
    router.post('/api/resF/', restFul.restPost)
    router.put('/api/resF/', restFul.restPut)

    /**
     * @des 接收 FormData 上传的数据，文件
     */
    // router.post('/api/upload/', upload.single('file'), file.upFormData) 
    router.post('/api/upload/', (ctx: any) => {
        console.log(ctx.request.body);
        ctx.body = 'ss'
    }) 

    /**
    * @des 以下两个接口用于单页面路由与indexedDB
    *  示例：http://localhost:2500/page/one/
     */
    router.get('/page/:path/', file.renderSPA)
    // 示例：http://localhost:2500/html/a/
    router.get('/html/:htmlFileName/', file.renderHtml)

    /**
     * @des 修改/data/data.json文件
     */
    router.post('/api/updateFinancialData/', file.updateFileContent)

    /**
     * @des vue-admin financial板块
     */

    /**
     * 获取所有的company
     */
    // router.get('/api/financial/company/',financial.getCompany)
    // router.get('/api/financial/product/',financial.getProducts)
    // router.post('/api/financial/product/',financial.productUpdate)

    /**
     * @des  for work test
     */

}