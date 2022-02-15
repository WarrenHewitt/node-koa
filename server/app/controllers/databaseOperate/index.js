"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = __importDefault(require("../../database/mongo"));
const getUsers = () => {
    return mongo_1.default.query();
};
exports.default = (router) => {
    /**
     * @des 查询接口
     */
    router.get('/api/users/', async (ctx) => {
        const result = await getUsers();
        ctx.response.body = result;
    });
};
