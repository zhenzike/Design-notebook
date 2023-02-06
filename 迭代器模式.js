//迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示。
//迭代器模式可以把迭代的过程从业务逻辑中分离出来，在使用迭代器模式之后，即使不关心对象的内部构造，也可以按顺序访问其中的每个元素。

//为遍历不同数据结构的“集合”提供统一的接口;

//能遍历访问“集合”数据中的项，不关心项的数据结构

//统一遍历结构实现
var kerinEach=function(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(i,arr[i])
    }
}

//外部调用
kerinEach([11,22,33,44],function(index,value){
    var oli=document.createElement('li')
    oli.innerHTML=value
    list.appendChild=(oli) //假设list为dom元素
})