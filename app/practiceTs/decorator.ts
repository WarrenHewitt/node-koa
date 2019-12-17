function fac() {
    console.log('fac');
    return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('fac deco')
    }
}

function manage() {
    console.log('manage');
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('manage deco');
    }
}


/** 
 * 类装饰器: 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义 
 * 1. 利用继承添加属性
 */
function classExtend (target: any) {
    return class extends target {
        age = 1
        constructor(age: number, name: String){
            super(name)
            this.age = age
        }
    }
}

function classLog(originConstructor: Function) {
    const original = originConstructor;


    const fn = function() {

    }

    fn.prototype = original.prototype

    return fn
}


// @classLog
@classExtend
class Dec {
    name:String = ''

    constructor(name: String) {
        this.name = name
    }

    /**
     * @des 组合：由上往下求值，由下往上依次调用
     */
    @fac()
    @manage()
    product() {
        console.log('product: ', this.name);
    }
}

export default function () {
    const dec = new Dec('hew')
    console.log('=========');
} 