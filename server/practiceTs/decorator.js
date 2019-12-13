"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function fac() {
    console.log('fac');
    return function (target, propertyKey, descriptor) {
        console.log('fac deco');
    };
}
function manage() {
    console.log('manage');
    return function (target, propertyKey, descriptor) {
        console.log('manage deco');
    };
}
class Dec {
    /**
     * @des 组合：由上往下，
     */
    peoduct() { }
}
__decorate([
    fac(),
    manage()
], Dec.prototype, "peoduct", null);
function default_1() {
    const dec = new Dec();
    console.log('=========');
}
exports.default = default_1;
//# sourceMappingURL=decorator.js.map