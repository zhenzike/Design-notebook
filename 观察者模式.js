// 观察者模式包含 观察目标 和 观察者 两类对象，
// 一个目标可以有任意数目的与之相依赖的观察者
// 一旦观察目标的状态发生改变，所有的观察者都将得到通知。

// 当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，
// 解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题

// 优势:目标者与观察者，功能耦合度降低，专注自身功能逻辑;观察者被动接收更新，时间上解耦，实时接收目标者更新状态。
// 缺点:观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如“筛选通知"，“指定主题事件通知”。


class Subject {  //目标
    constructor() {
        this.observer = [];//用于存放观察者
    }

    add(observer) {//向数组添加观察者
        this.observer.push(observer)
    }

    remove(observer) {//从数组中删除观察者
        this.observer = this.observer.filter(item => {
            return item != observer
        })
    }

    notify() {//通知方法,当调用这个方法时，所有观察者都会获取通知
        this.observer.forEach(item => {
            item.update()
        })
    }
};

class Observer { //观察者
    constructor(name) {
        this.name = name
    }

    update() {
        console.log('update', this.name);
    }
};

const subject = new Subject();
const observer1 = new Observer('1');
const observer2 = new Observer('2');

subject.add(observer1);
subject.add(observer2);
subject.remove(observer1)
subject.notify()
