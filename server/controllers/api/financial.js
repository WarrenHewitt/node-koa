"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../../database/mysql"));
const common_1 = require("../../utils/common");
exports.default = {
    getCompany(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield mysql_1.default.query('SELECT * FROM company');
                ctx.response.body = common_1.formatReturnData(results);
            }
            catch (error) {
                ctx.response.body = common_1.formatReturnData({}, 1, '查询错误');
                console.log('获取company：', error);
            }
        });
    },
    getProducts(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield mysql_1.default.query('SELECT * FROM product');
                ctx.response.body = common_1.formatReturnData(products);
            }
            catch (error) {
                ctx.response.body = common_1.formatReturnData({}, 1, '查询错误');
                console.log('获取products：', error);
            }
        });
    },
    productUpdate(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const { product, change } = ctx.request.body;
            const id = Math.random().toString().substr(2, 10);
            try {
                const results = yield mysql_1.default.insert(`INSERT INTO income(id, product, \`change\`, total) VALUES (${id}, ${product}, ${change}, 888)`);
                ctx.response.body = common_1.formatReturnData(results);
            }
            catch (error) {
                ctx.response.body = common_1.formatReturnData({}, 1, '插入错误');
                console.log('获取company：', error);
            }
        });
    }
};
//# sourceMappingURL=financial.js.map