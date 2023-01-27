var employee1={
    name:'zs',
    age:10
}

var employee2={
    name:'li',
    age:12
}

//-----以上写法如果数据过多，代码重复并且臃肿-------------

function Employee(name,age){//es6可使用class
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log(this.name+','+this.age);
    }
}

//使用es6中的类，完成构造器的写法

class Employee2{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}


new Employee("zs",100)
//缺点每次在每次new的时候，都要重新去请求新的内存，去存放不同的数据，
//但是例子中的say函数，无论new多少次，函数都是相同的，但是却在每次new时，都要为其专门开辟空间对其进行存储
//因此需使用到原型模式