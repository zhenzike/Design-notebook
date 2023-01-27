//建造者模式 (builder pattern)属于创建型模式的一种，提供一种创建复杂对象的方式。它将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。

//建造者模式是一步一步的创建一个复杂的对象，它允许用户只通过指定复杂的对象的类型和内容就可以构建它们，用户不需要指定内部的具体构造细节。

//建造者模式将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。
//工厂模式主要是为了创建对象实例或者类簇（抽象工厂)，关心的是最终产出(创建)的是什么，而不关心创建的过程。
//而建造者模式关心的是创建这个对象的整个过程，甚至于创建对象的每一个细节。


class NavBar {   //象征着具体的构造细节
    init() {
        console.log("navbar-init");
    };

    getData() {
        console.log("navbar-getdata");
    };

    render() {
        console.log("navbar-render");
    };
}

class List {
    init() {
        console.log("list-init");
    };

    getData() {
        console.log("list-getdata");
    };

    render() {
        console.log("list-render");
    };
}

//此时想要调用NavBar，List类中方法，可以实例化之后调用
// const navbar=new NavBar();
// navbar.init();
// navbar.getData();
// navbar.render()
// 而List也有相似的步骤、结果，因此可以设计一个类来具体的实现这个过程
// 这个类就是建筑者

class Creator {
    //通过操作对象来一步步实现一个复杂对象
    //并且如果存在异步时，可以通过在建筑者统一处理，如使用async、await修饰
    async startBuild(builder) {
        await builder.init();
        await builder.getData();
        await builder.render();
    }
}

const C = new Creator();
C.startBuild(new NavBar());
C.startBuild(new List());