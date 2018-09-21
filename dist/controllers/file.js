"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
module.exports = {
    // save img by base64
    upBase64(ctx) {
        const data = ctx.request.body;
        const base64 = data.data;
        const buffer = new Buffer(base64, 'base64');
        fs_1.default.writeFile(`files/a.txt`, buffer, (err) => {
            if (err)
                throw err;
            console.log('saved!');
        });
        ctx.body = 'ok';
    },
    // save img by formData
    upFormData(ctx) {
        const data = ctx.request.body.files.data;
        const savePath = path_1.default.join(`./files`, data.name);
        const reader = fs_1.default.createReadStream(data.path);
        const writer = fs_1.default.createWriteStream(savePath);
        // ctx.body = 'http://localhost:1112/' + data.name
        console.log(reader.pipe(writer));
        ctx.body = 'http://localhost:1112/' + data.name;
    }
};
//# sourceMappingURL=file.js.map