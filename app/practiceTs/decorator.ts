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


class Dec {
    /**
     * @des 组合：由上往下，
     */
    @fac()
    @manage()
    peoduct() {}
}

export default function () {
    const dec = new Dec()
    console.log('=========');
} 