"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../database/mysql"));
const common_1 = require("../utils/common");
exports.default = {
    async getCompany(ctx) {
        try {
            const results = await mysql_1.default.query('SELECT * FROM company');
            ctx.response.body = (0, common_1.formatReturnData)(results);
        }
        catch (error) {
            ctx.response.body = (0, common_1.formatReturnData)({}, 1, '查询错误');
            console.log('获取company：', error);
        }
    },
    async getProducts(ctx) {
        try {
            const products = await mysql_1.default.query('SELECT * FROM product');
            ctx.response.body = (0, common_1.formatReturnData)(products);
        }
        catch (error) {
            ctx.response.body = (0, common_1.formatReturnData)({}, 1, '查询错误');
            console.log('获取products：', error);
        }
    },
    async productUpdate(ctx) {
        const { product, change } = ctx.request.body;
        const id = Math.random().toString().substr(2, 10);
        try {
            const results = await mysql_1.default.insert(`INSERT INTO income(id, product, \`change\`, total) VALUES (${id}, ${product}, ${change}, 888)`);
            ctx.response.body = (0, common_1.formatReturnData)(results);
        }
        catch (error) {
            ctx.response.body = (0, common_1.formatReturnData)({}, 1, '插入错误');
            console.log('获取company：', error);
        }
    }
};
