//抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建。

class User {
    constructor(name, role, pages) {
        this.name = name;
        this.role = role;
        this.pages = pages;
    }

    welcome() {
        console.log("欢迎", this.name);
    }

    dataShow() {
        throw new Error('抽象方法需要被实现')
    }
}

class Superadmin extends User {
    constructor(name) {
        super(name, "superadmin", ["home ", "user-manage", " right-manage ", " news-manage "])
    }

    dataShow() {
        console.log('superadmin-datashow');
    }

    addRight() {

    }
}

class Admin extends User {
    constructor(name) {
        super(name, "admin", ["home", "user-manage", "news-manage"])
    }

    dataShow() {
        console.log('admin-datashow');
    }
}

class Editor extends User {
    constructor(name) {
        super(name, "editor", ["home ", "news-manage"])
    }
}


function getAbstractUserFactory(role) {
    switch (role) {
        case "superadmin":
            return Superadmin;

        case "admin":
            return Admin;

        case "editor":
            return Editor;

        default:
            throw new Error('参数错误')
    }
}

let userClass = getAbstractUserFactory('superadmin')
let user = new userClass('zs')
console.log(user);