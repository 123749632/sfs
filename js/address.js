new Vue({
	el: '.container',		//el：element 需要获取的元素  或者说，el是作为监控页面的范围，在哪个容器下
	data:{					//用于数据的存储（对象，变量）
	    limintNum: 3, 
		addressList:[],
		currentIndex: 0,
		i:0
	},
	//mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
	//mounted钩子函数一般是用来向后端发送请求，拿到数据之后做一些业务处理
	mounted: function(){  //因为mounted不能代表我们的vue实例插入到Dom节点中，所以需要配合$nextTick
	
	//是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的DOM
		this.$nextTick(function(){	//$nextTick可以确保将vue实例插入到Dom节点 
			this.getAddressList();
		});
	},
	computed: {		//一般用于实时计算,虽然少用..但是很实用
		fiterAddress: function() {
			return this.addressList.slice(0, this.limintNum);	//slice() 方法可从已有的数组中返回选定的元素。
		}
	}, 
	methods:{
		//请求数据接口，请求数据
		getAddressList: function(){
			var _this = this;	//这里我是这样理解的..this代表当前的vue实例，，而_this是为了防止冲突，把this的值赋予
			//使用vue-resource的http请求，来获取json的数据..并用一个变量来接收
			this.$http.get("data/address.json").then(function(response){ 
				var res = response.data; 	//response的status的值为200，而response.data的status的值为0
					if(res.status=="0"){
						_this.addressList = res.result;
					} 
			});
		},
		//点击更多，显示所有的地址信息
		sunny_7: function(){
			this.limintNum = this.addressList.length; 
		},
		//设为默认地址、
		setDefault: function(addressId){
			this.addressList.forEach(function(address,index){
				if(address.addressId==addressId){
					address.isDefault = true;
				}else{
					address.isDefault = false;
				}
			});
		}
	} 
});
 