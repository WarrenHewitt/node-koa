import path from 'path'
import multer from 'koa-multer'

/**
 * @description 当没有默认导出时要用 * 防止报错
 */
import * as file from './file'
import * as api from './api'

const upload = multer({ dest: path.join(__dirname + '/uploadFiles/') })

exports.api = (router: any) => {
    // 上传文件
    router.post('/api/upload/', upload.single('file'), file.uploadFile) 

    /**
    * @desc 以下两个接口用于单页面路由与indexedDB
    */
    // http://localhost:2500/page/one
    router.get('/page/:path/', file.renderSPA)

    // http://localhost:2500/html/a/
    router.get('/html/:htmlFileName/', file.renderHtml)

    /**
     * @desc GET POST PATCH PUT
     */

    // for work
    router.get('/api/myNode/vList/', api.vList)
}