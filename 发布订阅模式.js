// 在观察者模式中 观察者 和 目标 要相互知道
// 而 发布者 和订阅者 不用互相知道，通过第三方实现调度，属于经过解耦合的观察者模式

const PubSub = {
    list: [],
    publish() {//调用这个方法后，会执行所有订阅者函数(即发布者)
        this.list.forEach(item => item())
    },
    subscribe(cb) {//保存订阅回调函数
        this.list.push(cb)
    }
}

function testA() {
    console.log('testA');
};

function testB() {
    console.log('testB');
};

PubSub.subscribe(testA);
PubSub.subscribe(testB);

PubSub.publish()//调用发布者