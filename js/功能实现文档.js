/*











删除功能:
首先需要一个变量，来判断用户选中了删除功能，并且做 删除的判断..
然后，还需要申明一个变量，用来接收item集合的值，并且还需要写一个条件..来判断，用户是想删除哪个商品的信息

1.当用户点击删除按钮时，触发sunny_5事件，并且将item集合全部传过去..
2.sunny_5(item)接收这个传过来的参数..然后需要申明一个变量，用来做条件判断
并且要把delFlag为true，才能去执行下面的删除功能..
然后还需要申明一个变量，判断用户想删除哪个商品的值
var index = this.productList.indexOf(this.curproduct); 获取要删除的商品下标
3.点击Yus执行删除功能，触发delProduct（）事件
var index = this.productList.indexOf(this.curproduct); 获取要删除的商品下标
4.this.productList.splice(index,1);	  执行删除

 


vue中的$http服务  需要引入一个叫vue-resource.js的文件，因为vue.js中没有$http服务。如果需要使用这个服务去百度下载vue-resource.js 然后引进项目即可

引入单个vue的时候 可以使用 vue-resource.js的文件实现交互效果

搭建vue项目的时候，我们一般用  axios 

Vue 原本有一个官方推荐的 ajax 插件 vue-resource，但是自从 Vue 更新到 2.0 之后，官方就不再更新 vue-resource

目前主流的 Vue 项目，都选择 axios 来完成 ajax 请求，而大型项目都会使用 Vuex 来管理数据

后期会更新 axios以及项目搭建
--------------------- 
作者：小胖梅 
来源：CSDN 
原文：https://blog.csdn.net/xm1037782843/article/details/80673181 
版权声明：本文为博主原创文章，转载请附上博文链接！




总结:
1.凡是看到列表，很多条列表数据，实用v-for指令
2.只要看到金额，货币，转换 一般使用过滤器
3.凡是看到表单，文本框，单选框，下拉框，复选框啊...from表单里面的，一般都使用v-model进行双向数据绑定功能
4.凡是看到操作的，和前端人机交互的这种，一般使用v-on进行事件绑定
5.凡是有样式变化的，比如单选框选中，复选框选中...凡是有样式变化的，尽量使用v-bind来动态操控class..使用v-bind在
原有class基础上..添加一个class..动态变更class
6.vue.$set(set),可以添加一个变量....可以实现，如果json，或者接口中，没有的变量..我们去添加一个变量，来实现我们的功能





*/