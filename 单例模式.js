//  1. 保证一个类仅有一个实例，并提供一个访问它的全局访问点
//  2. 主要解决一个全局使用的类频繁地创建和销毁，占用内存

// var singleton=(function(){
//     在函数内部 返回的函数被外界的singleton所引用，形成闭包，使得函数内部变量无法释放
//     return function(){
//     }
// })()


//当第一次调用singleton时，由于返回的是函数，所以第一次传参时!instance一定为真
//所以instance会被赋为一个实例
//之后再次调用singleton时，由于闭包，instance并没有被回收，因此!instance一定为假
//所以会直接将之前创建的实例返回出去
//即重复调用多次的结果是一样的
var singleton=(function(){
    var instance;

    function User(name,age){
        this.name=name;
        this.age=age;
    };

    return function(name,age){
        if(!instance){
            instance=new User(name,age)
        }
        return instance
    }
})()

// ----------ES6--------------------------------------
class Singleton2{
    constructor(name,age){
        //类在内存中是唯一的，所以通过在类上直接挂一个属性，用于判断
       if(!Singleton2.instance){
        this.age=age;
        this.name=name;
        Singleton2.instance=this
       }
       return Singleton2.instance
    }
}