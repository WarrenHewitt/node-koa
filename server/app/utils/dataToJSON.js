"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * @des 将数据写入json文件
 * @param { Object } data  json 格式的对象数据
 */
function default_1(data) {
    try {
        const dataString = JSON.stringify(data, null, 4);
        fs_1.default.writeFileSync(path_1.default.join('./server/data/baiDuData.json'), dataString, 'utf8');
        return 'success';
    }
    catch (error) {
        console.error(error);
        return 'error';
    }
}
exports.default = default_1;
