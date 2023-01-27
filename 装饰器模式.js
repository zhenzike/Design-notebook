// 装饰器模式能够很好的对已有功能进行拓展，这样不会更改原有的代码，对其他的业务产生影响， 方便我们在较少的改动下对软件功能进行拓展。


Function.prototype.before = function (beforeFn) {
    var self = this;//原本的函数，调用了这个方法，因此就是这个this
    return function () {
        //前置函数调用(先调用传入的方法)
        beforeFn.apply(this, arguments);

        //执行(返回)原来的函数
        return self.apply(this,arguments);
    };
};

Function.prototype.after = function (afterFn) {
    var self = this;
    return function () {
        //先调用原本的函数
        var ret = self.apply(this, arguments);
        //再调用传入的方法
        afterFn.apply(this, arguments);
        return ret;
    };
};

function test(){
    console.log('1111');
}
// 由于test定义的过程相当于 var test =new Function(),因此test原型上带有before方法
var test0=test.before(function(){ //before返回的是一个方法因此需要接收调用
    console.log('0000');
}).after(function(){ //前两步返回的方法调用了after
    console.log('2222');
})
//至此完成对原函数的'装饰'
test0() // >>> 0000   1111 2222
