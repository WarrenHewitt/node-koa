import fs from 'fs'
import path from 'path'

export = {
    // save img by base64
    upBase64(ctx: any) {
        const data = ctx.request.body;
        const base64 = data.data;
        const buffer = new Buffer(base64, 'base64');
        fs.writeFile(`files/a.txt`, buffer, (err: any) => {
            if (err) throw err;
            console.log('saved!');
        })

        ctx.body = 'ok'
    },

    // save img by formData
    upFormData(ctx: any) {
        const data = ctx.request.body.files.data;
        const savePath = path.join(`./files`, data.name)
        const reader = fs.createReadStream(data.path)
        const writer = fs.createWriteStream(savePath)
        
        
        // ctx.body = 'http://localhost:1112/' + data.name
        console.log(reader.pipe(writer))
        ctx.body = 'http://localhost:1112/' + data.name
        

        
    }
}

