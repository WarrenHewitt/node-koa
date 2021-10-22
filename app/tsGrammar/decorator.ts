function fac() {
    console.log('start fac:');
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('fac propertyKey:', propertyKey)
    }
}

function manage() {
    console.log('start manage:');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('manage deco');
    }
}


/** 
 * 类装饰器: 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义 
 */
function classExtend (target: any):any {
    return class extends target {
        age = 'age 666'
        /** 重载name */
        name = 'warren'
    }
}
function classLog(originConstructor: Function) {
    console.log('start log:', originConstructor.name);
}


export default function () {
    console.log('===============================');
    @classExtend
    @classLog
    class Dec {
        name: string;
        age: string;
        constructor(name: string, age: string) {
            this.name = name
            this.age = age
        }

        /**
         * @des 组合：由上往下求值，由下往上依次调用
         */
        @fac()
        @manage()
        product1() {
            console.log('product: ', this.name, this.age);
        }
    }
    const dec = new Dec('hew', 'age 2333')
    dec.product1()
    console.log('===============================');
} 