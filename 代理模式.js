//代理模式(Proxy)，为其他对象提供一种代理以控制对这个对象的访问。
//代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象:文件，资源，内存中的对象，或者是一些难以复制的东西。


var star = {
    name: 'zs',
    price: 10000
}

//对于对象进行代理，要想对对象访问或修改对象的属性、方法都可以提前在proxy中的get、set提前进行处理
let proxy = new Proxy(star, {
    get(target, key) {
        if (key === 'price') {
            console.log(target[key]);
        }
    },
    set(target, key, value) {
        if (key === 'price') {
            console.log('设置');
            if (value > 10000) {
                console.log('可以合作');
            } else {
                throw new Error('价钱不合适')
            }
        }
    }
})

proxy.price = 110











