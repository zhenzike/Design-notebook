// 策略模式定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的变化不会影响使用算法的客户。

// 策略模式属于对象行为模式，它通过对算法进行封装，把使用算法的责任和算法的实现分割开来，并委派给不同的对象对这些算法进行管理。

// 该模式主要解决在有多种算法相似的情况下，使用if...e1se所带来的复杂和难以维护。它的优点是算法可以自由切换，同时可以避免多重if...else判断，且具有良好的扩展性。

// 假如公司中有不同职位对应不同的工资
function calBonus0(level,salary){
    if(level=="a"){
        return salary*4
    }
    if(level=="b"){
        return salary*3
    }
    if(level=="c"){
        return salary*2
    }
}
calBonus0('a',1000)  //虽然可以返回需要的结果，但方法内部if。。else过多，且需要扩展时，也要添加更多的if判断

// ------------策略模式下------------------
let strategry={  //将算法封装，与实现算法分隔，易于扩展
    'a':(salary)=>salary*4,
    'b':(salary)=>salary*3,
    'c':(salary)=>salary*2,
}

function calBonus1(level,salary){
     return strategry[level](salary)
}
calBonus1('a',1000)  
