//有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，也不知道被请求的操作是什么。
//需要一种松耦合的方式来设计程序，使得发送者和接收者能够消除彼此之间的耦合关系。

//命令模式由三种角色构成:
// 1.发布者 invoker (发出命令，调用命令对象，不知道如何执行与谁执行);
// 2.接收者 receiver (提供对应接口处理请求，不知道谁发起请求);
// 3.命令对象 command (接收命令，调用接收者对应接口处理发布者的请求)。
// 发布者与接收者互不知道
// 可与组合模式形成宏命令
class Receiver{
 
    //接收类
    execute(){
        console.log('接收者执行请求');
    }
}

class Command{
    constructor(receiver){
        this.receiver=receiver
    }
    //命令类
    execute(){
        console.log('命令对象=>接收者如何处理');
        this.receiver.execute()
    }
}

class Invoker{
    constructor(command){
        this.command=command
    }
    //发布类
    order(){
        console.log('发布请求');
        this.command.execute()
    }
}

const order=new Command(new Receiver);
const client=new Invoker(order)
client.order()//调用该函数后会先发布请求,调用命令对象->接收请求，调用接收对象->执行请求