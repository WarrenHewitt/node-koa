import path from 'path'

/**
 * @desc 操作 multipart/form-data 
 */
import multer from 'koa-multer'

/**
 * @desc 当没有默认导出时要用 * 防止报错
 */
import * as file from './file'
import * as api from './api'

const upload = multer({ dest: path.join(__dirname + '/uploadFiles/') })

exports.api = (router: any) => {
    // 上传文件
    router.post('/api/upload/', upload.single('file'), file.uploadFile) 

    /**
    * @desc 以下两个接口用于单页面路由与indexedDB
    *  事例：http://localhost:2500/page/one；http://localhost:2500/html/a/
    */
    router.get('/page/:path/', file.renderSPA)
    router.get('/html/:htmlFileName/', file.renderHtml)

    /**
     * 修改/data/data.json文件
     */
    router.post('/api/updateFinatialData/', file.updateFileContent)

    /**
     * @desc  for work test
     */
    router.get('/api/myNode/vList/', api.vList)
    router.get('/api/myNode/record/', api.getRecord)

}