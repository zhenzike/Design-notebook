// 模块化模式最初被定义为在传统软件工程中为类提供私有和公共封装的一种方法。

// 能够使一个单独的对象拥有公共/私有的方法和变量，从而屏蔽来自全局作用域的特殊部分。这可以减少我们的函数名与在页面中其他脚本区域内定义的函数名冲突的可能性。

let count=0;
function a(){
    return ++count;
};

function b(){
    return --count;
};

// 导出、导入方式1:
// 导出
// export default{
//     a,
//     b
// }
// html中导入
// <script type="module">
// import bbb from ".....";
// </script> 

// 导出、导入方式2:
// 导出
// export {
//     a,
//     b
// }
// html中导入
// <script type="module">
// import {a,b} from ".....";
// </script> 