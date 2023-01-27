//由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。(这一类对象，可能由于需求的不同，而造成了创建的结构有差异)

//假设在一个管理系统中有 超级管理员、管理员、编辑三种用户分别拥有不同的权限

function User(role, pages) {
    this.role = role;
    this.pages = pages;
}

//在将来想要根据传入的参数，来创建不同的对象
//如果是通过var a=new User("superadmin", ["home ", "user-manage", " right-manage ", " news-manage "])来提前创建好对象
//随后通过a.role===登录用户.role来判断用户对应权限，不是则再去比较其他，则浪费空间
//因此可以用函数来决定到底应该生成哪一种角色对应的对象
//既userFactory是一个用来生成User对象的工厂

function userFactory(role) {
    switch (role) {
        case "superadmin":
            return new User("superadmin", ["home ", "user-manage", " right-manage ", " news-manage "]);

        case "admin":
            return new User("admin", ["home", "user-manage", "news-manage"]);

        case "editor":
            return new User("editor", ["home ", "news-manage"])

        default:
            throw new Error('参数错误')
    }
}

var user = userFactory("superadmin")


//简单工厂的优点在于，只需要一个正确的参数，就可以获取到所需要的对象，而无需知道其创建的具体细节。
//但是在函数内包含了所有对象的创建逻辑和判断逻辑的代码，每增加新的构造函数还需要修改判断逻辑代码。
//当对象不是上面的3个而是10个或更多时，这个函数会成为一个庞大的超级函数，便得难以维护。
//所以，简单工厂只能作用于创建的对象数量较少，对象的创建逻辑不复杂时使用。


//es6
class User {
    constructor(role, pages) {
        this.role = role;
        this.pages = pages;
    }

    static userFactory(role) {
        switch (role) {
            case "superadmin":
                return new User("superadmin", ["home ", "user-manage", " right-manage ", " news-manage "]);

            case "admin":
                return new User("admin", ["home", "user-manage", "news-manage"]);

            case "editor":
                return new User("editor", ["home ", "news-manage"])

            default:
                throw new Error('参数错误')
        }
    }
}

var user2=User.userFactory("superadmin")