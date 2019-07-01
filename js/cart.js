new Vue({ 
		el: "#app",
		data:{
			totalMoney:0,
			productList:[],
			checked_1: false, 
			delFlag:false,
			curproduct:'',
			is:"address.html"
		},
		filters:{			 //过滤器
			Money:function(value){
				return "¥" + value.toFixed(2);
			}
		},
		mounted: function () {
			this.cartView();
		},
		methods:{
			/* 显示商品信息 */
			cartView: function () {
				let _this = this;
				this.$http.get("data/cartData.json", {"id":123}).then(res=>{
					this.productList = res.data.result.list;
					/* this.totalMoney = res.data.result.totalMoney; */
			});
			},
			/* 商品数量的加减 */
			sunny_1: function(item,j){
				if(j>0){
					item.productQuantity++; 
				}else{
					item.productQuantity--;
					if(item.productQuantity < 1){
						item.productQuantity = 1;
						
					}
				} 
				this.sunny_4();
			},
			/* 单选框是否选中 */
			sunny_2: function(ite){
				if(typeof ite.checked == 'undefined'){	//typeof是javascript的运算符，可以对变量和表达式做判断
					Vue.set(ite,"checked", true);	//在cartData.json的result下的list集合里面 全局注册一个checked变量
					
				}else{
					ite.checked = !ite.checked;		//状态取反
				}
				this.sunny_4();
			},
			/* 全选框 */
			sunny_3: function(flag){
				this.checked_1 = flag;
				var _this = this;  
				this.productList.forEach(function(it,index){
					//cartData.json的result下的list集合里面没有 checked这个变量，所以等于 'undefined' 未定义
					if(typeof it.checked == 'undefined'){  			
						_this.$set(it,"checked", _this.checked_1);
					}else{
						it.checked = _this.checked_1;
					} 
				}); 
				this.sunny_4();
			},
			/* 累计商品总金额 */
			sunny_4: function(){
				var _this = this;  
				this.totalMoney = 0;
				this.productList.forEach(function (item,index){
					if(item.checked){		//如果选中了单选框，就计算商品总金额..没有选中单选框或者全选框，就不进入if计算金额
						_this.totalMoney += item.productPrice * item.productQuantity;
					} 
				});
			},
			/* 删除商品信息 */
		  	sunny_5: function(item){
					this.delFlag = true;
					this.curproduct = item;
			},
			//删除功能
			delProduct: function(){
				var index = this.productList.indexOf(this.curproduct);
				//splicejs原生方法 index必需。规定从何处添加/删除元素。
				this.productList.splice(index,1);					
				this.delFlag = false; 
			}
		}
});
Vue.filter("price", function(value, type){ 
		return "¥" + value.toFixed(2) + type;  
});