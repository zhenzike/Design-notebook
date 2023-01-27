function Employee(name,age){//es6可使用class
    this.name=name;
    this.age=age;    
}

Employee.prototype.say=function(){ //将方法挂载到原型上
    console.log(this.name+','+this.age);
}

new Employee("zs",100)

//使用es6中的类，完成原型的写法

class Employee2{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    say(){//这个方法是挂载到原型上
        console.log(this.name+','+this.age);
    }
}