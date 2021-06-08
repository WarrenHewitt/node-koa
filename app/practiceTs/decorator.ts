function fac() {
    // console.log('fac');
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log('propertyKey:', propertyKey)
    }
}

function manage() {
    // console.log('manage');
    return function (
        // target, propertyKey: string, descriptor: PropertyDescriptor
        ) {
        // console.log('manage deco');
    }
}


/** 
 * 类装饰器: 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义 
 */
function classExtend (target: any):any {
    return class extends target {
        age = 'age'
        /** 重载name */
        name = 'warren'
    }
}
function classLog(originConstructor: Function) {
    console.log('log', originConstructor.name);
}


// @classExtend
// @classLog
class Dec {
    name:String = ''

    constructor(name: String) {
        this.name = name
    }

    /**
     * @des 组合：由上往下求值，由下往上依次调用
     */
    @fac()
    // @manage()
    product() {
        // console.log('product: ', this.name, this.age);
    }
}

export default function () {
    // const dec = new Dec('hew')
    // dec.product()
    // console.log('=========');
} 