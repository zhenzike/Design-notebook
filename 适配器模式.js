// 将一个类的接口转换成客户希望的另一个接口。
// 适配器模式让那些接口不兼容的类可以一起工作

class TencentMap{
    show(){
        console.log("渲染腾讯");
    }
};

class BaiDuMap{
    display(){
        console.log('渲染百度');
    };
};

class TencentAdapater extends TencentMap {
    constructor(){
        super()
    }

    display(){
        this.show()
    }
}

function RenderMap(map){
    map.display()
}

RenderMap(new TencentMap()) 
//因为TencentMap在RenderMap环境中并没有display的方法
//因此需要一个适配器TencentAdapater来使得它可以在RenderMap中运行
RenderMap(new TencentAdapater());
RenderMap(new BaiDuMap())