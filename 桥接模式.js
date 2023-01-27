//桥接模式:将抽象部分与它的实现部分分离，使它们都可以独立地变化。
//使用场景:一个类存在两个或多个独立变化的维度，且这两个维度都需要进行扩展

//优点:
//把抽象与实现隔离开，有助于独立地管理各组成部分。

//缺点:
//每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响―—提高了系统的复杂程度。

// 设定一下三种提示框需要有不同的动画效果，且可以任意的与下方动画库的动画进行组合
// 提示框都想实现动画，但是其中内部并不实现动画效果，实际上动画由动画库中封装的动画实现
// 由提示框进行对接和选择到底使用哪一个动画 ,即桥接
// model(模态框)
// message(消息提示框)
// toast(吐司提示框)

const Animations={ //有这样一个动画库，分别有三种不同的动画效果
    bounce:{
        show(ele){
            console.log(ele,'弹跳显示');
        },
        hide(ele){
            console.log(ele,'弹跳隐藏');
        }
    },
    slide:{
        show(ele){
            console.log(ele,'滑动显示');
        },
        hide(ele){
            console.log(ele,'滑动隐藏');
        }
    },
    rotate:{
        show(ele){
            console.log(ele,'旋转显示');
        },
        hide(ele){
            console.log(ele,'旋转隐藏');
        }
    },
}

function Toast(ele,animation){
    this.ele=ele;
    this.animation=animation;
}

Toast.prototype.show=function(){
    //抽象
    this.animation.show(this.ele)
}

Toast.prototype.hide=function(){
    //抽象
    this.animation.hide(this.ele)
}

//此时若想使用弹出,且之后若想更改只需改变组合即可
let toast1=new Toast('div',Animations.bounce)
toast1.show()