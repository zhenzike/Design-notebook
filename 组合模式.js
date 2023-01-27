//组合模式在对象间形成树形结构;
//组合模式中基本对象和组合对象被一致对待;
//无须关心对象有多少层,调用时只需在根部进行调用;

//它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以向处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。

//模拟扫描文件夹
const Folder=function(folder){
    this.folder=folder;
    this.list=[]; //保存 子文件夹或文件
}

Folder.prototype.add=function(res){
    this.list.push(res)
}

Folder.prototype.scan=function(){
    console.log('扫描文件夹',this.folder);
    for(let i=0;i<this.list.length;i++){
        this.list[i].scan()
    }
}

const File=function(file){
    this.file=file;
}

File.prototype.scan=function(){
    console.log('扫描文件',this.file);
}

//根
let rootFolder=new Folder('root');
let htmlFolder=new Folder('html');
let jsFolder=new Folder('js');
let cssFolder=new Folder('css');
let hhhFolder=new Folder('hhh');

//文件
let html=new File('html');
let js=new File('js');
let cssr=new File('css');
let hhh=new File('hhh');


rootFolder.add(htmlFolder);
rootFolder.add(jsFolder);
jsFolder.add(hhhFolder);
hhhFolder.add(html);
jsFolder.add(js);
rootFolder.add(cssFolder);




rootFolder.scan()