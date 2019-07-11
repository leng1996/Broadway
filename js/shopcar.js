

//数量加减
//function add(){
//		this.init();
//	}
//	
//	add.prototype.init = function(){
//			var i = 1;
//			$(".cont").children().eq(0).on("click",function(){
//				console.log($(".cont").children("input").val())
//				if($(".cont").children("input").val() == 1){
//					$(".cont").children("input").val(1) 
//				}else{
//					$(".cont").children("input").val(--i) 
//				}
//			})
//			
//			$(".cont").children().eq(2).on("click",function(){
//				if($(".cont").children("input").val() == 10){
//					$(".cont").children("input").val(10)
//				}else{
//					$(".cont").children("input").val(++i)
//				}
//			})
//	};
//	
//	
//	new add()

 
 
//    class shopcar{
//    	constructor(options){
// // 		1.解析参数
// 		this.shop = options.shop;
// 		this.url = options.url;
// 		this.shopul = options.shopul;
// 		this.shopulli = options.shopulli;
// //		console.log(this.shop)
// //		console.log(this.shopulli)
	
// //		2.请求数据
// 		this.load()
		
// //		5.绑定事件
// 		this.addEvent()
		
		
//    	}
   	
   	
//    	load(){
// // 		console.log(1)
//    		var that = this;
//    		$.ajax({
//    			url:this.url,
//    			success:function(res){
//      				that.res = res;
//      				// console.log(that.res)
// // 				that.res = JSON.parse(res);
//    				that.getCookie();
// // 				console.log(that.res)
// // 			3.请求数据成功后渲染页面
// // 				that.display();
//    			}
// // 			error:function(){				
// // 			}	
//    		})	
//    	}
   	
//    	getCookie(){
// // 		console.log(getCookie("goods"))
//    		this.goods = JSON.parse(getCookie("goods"));
// 		// console.log(this.goods)
// //console.log(this.res)
// //console.log(this.goods)
//    		this.display();
//    	}
   	
   
//    	display(){
// // 		4.遍历数据 拼接解构 渲染页面
// //		console.log(1)
//    		var str = "";
// // 		比对cookie和总数据
//    		for(var i=0;i<this.res.length;i++){
// 			//    console.log(1)
// 			for(var j=0;j<this.goods.length;j++){
// 								// console.log(this.goods.length)
// 								// console.log(this.goods[i].id,this.res[j].id)
// 								// console.log(this.goods[j].id)

							
// 				if(this.res[i].id == this.goods[j].id){
// 					// console.log(this.goods[j].id)
// 					// console.log(1)
// // // 					console.log(this.res[i])
// 		   			// str += `<li good="${this.res[i].id}">
// 					// 			<input type="checkbox" name="" id="" value="" />
// 					// 			<img src="${this.res[i].src}"/>
// 					// 			<p>${this.res[i].a1}</p>
// 					// 			<span>${this.res[i].a2}</span>
							
// 					// 			<div class="cont">
// 					// 				<i>-</i>
// 					// 				<input class="nbtn" type="number" name="" id="" value="1" min = "1"/>
// 					// 				<i>+</i>
// 					// 			</div>
// 					// 			<b id="del" index="${this.res[i].id}">删除</b>    
// 					// 		</li>`;
// 				   }
				   
//    			}
//    		}
//    		// this.shopul.innerHTML = str;
//    		this.addEvent()
//    	}
   	
//    		addEvent(){
// 			   var that = this;
			   
//    			this.shopul.addEventListener("click",function(eve){
// 				//    console.log(1)
//    				var e = eve || window.event;
// 				   var target = e.target || e.srcElement;
// 				//    setCookie("luke1","123")
// 				//    console.log(getCookie("luke1")) 
// 				//    console.log(getCookie("goods")) 
// 				//    that.display()
//    				if(target.id == "del"){
//    					console.log(target);
//    					that.id = eve.target.getAttribute("index");
// //						删除DOM元素
// 						eve.target.parentNode.parentNode.remove();
// //						6.遍历cookie,找到符合条件的数据,做删除
// 						that.changeCookie(function(index){
// //							8.删除并再次设置回去
// 							that.goods.splice(index,1);
// 							// 再次刷新网页
// 							location.reload([true])  
// 						})
//    				}

// 			   })		
			  
//    	}
   	
//    	changeCookie(callback){
// //				7.找到cookie中符合条件的数据
// 				for(var i=0;i<this.goods.length;i++){
// 					if(this.goods[i].id == this.id){
// 						break;
// 					}
// 				}
				
// 				callback(i);
				
// //				9.再设置回去
// //				12.再设置回去
// 				setCookie("goods",JSON.stringify(this.goods))
				
// 			}
   	
   	   	 	
   	 	
//    }

// 		new shopcar({
// 			shop:document.querySelector(".shop-3"),
// 			shopul:document.querySelector(".shop-3 ul"),
// 			url:"./json/goods.json"
// 	})




class car{
	constructor(){
		//完成数据的渲染
		this.body=document.querySelector(".carbody");
		console.log(this.body)
		this.url="json/goods.json";
		this.init()
		//绑定事件完成删除的功能
		this.addEvent(); 
	}
	addEvent(){
		var that=this;
	  
		this.body.onclick=function(e){
			var e=event||window.event;
			var target=e.target||e.srcElement;
			//删除功能
			console.log(target.className=="t4 del")
			if(target.className=="t4 del"){
				//获取点击对应的商品的id;
				that.id=target.parentNode.parentNode.getAttribute("index");
				//删除dom的节点
				// console.log(target.parentNode.parentNode)
				target.parentNode.parentNode.remove();
				//需要清除localStorage数据
				that.getCookie();
				// that.setData(function(i){
				// 	that.goods.splice(i,1)
				// })
				that.sum()

			}
			//商品数量的功能
			if(target.className=="small-button"){
				} 
			if(target.className=="check"){
				// console.log(target.className)
				that.sum()
			  }        
			}
	   }
	   changecount(){
		   var countButtons=document.querySelectorAll(".small-button")
		   var that=this;
		   for(var i=0;i<countButtons.length;i++){
			   countButtons[i].onclick=function(e){
				var e=event||window.event;
				var target=e.target||e.srcElement;
				if(target.textContent=="+"){
				  var figure=target.previousElementSibling.value;
				  if(target.previousElementSibling.value<=999){
					target.previousElementSibling.value=parseInt(target.previousElementSibling.value)+1;
					}
				 // console.log(target.previousElementSibling.value)
				  }else{
					if(target.nextElementSibling.value >= 2){
					  target.nextElementSibling.value = parseInt(target.nextElementSibling.value) - 1;
						 }
		
					// console.log(target.nextElementSibling.value)
				 }
				//  var contprice=target.nextElementSibling.nextElementSibling;
				// console.log(target.parentNode.parentNode)
				var price=target.parentNode.parentNode.querySelector(" .price");
				var contprice=target.parentNode.parentNode.querySelector(".priceCount");
				var input=target.parentNode.parentNode.querySelector(".count").value;
				// console.log(input)
				// //计算显示数据
				// console.log(price.textContent)
				// console.log(price.textContent.slice(1,price.textContent.length))
				 var newprice=parseInt(price.textContent.slice(1,price.textContent.length))*input;
				//  console.log(newprice)
				 contprice.innerHTML=newprice;
				 // 设置商品的数量

				 that.id=target.parentNode.parentNode.getAttribute("index");

				// that.setData(function(i){
				// that.goods[i].num=parseInt(input);
				// })
				that.changeCookie(
					function(i){
						that.goods[i].num=parseInt(input);
						}
				)
				 that.sum()
			   }
		   }
	   }
	   getCookie(){
		// 		console.log(getCookie("goods"))
		   		this.goods = JSON.parse(getCookie("goods"));
				// console.log(this.goods)
		//console.log(this.res)
		//console.log(this.goods)
		   		this.display();
			   }
		
   	changeCookie(callback){
//				7.找到cookie中符合条件的数据
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id == this.id){
						break;
					}
				}
			}
	   all(){
		   var that=this;
			 //全选
			//  this.divs=document.querySelectorAll(".body");
			var allcheck=document.querySelector(".checkboxall");
			//  console.log(allcheck)
			var checkBoxs = document.querySelectorAll('#car .check');
			// console.log(checkBoxs)
			// console.log(allcheck.checked)
			allcheck.onclick=function(){
				if(allcheck.checked){
					for(var i=0;i<checkBoxs.length;i++){
						if(!checkBoxs[i].checked){
							checkBoxs[i].checked=true;
						}
					}
				}else{
					for(var i=0;i<checkBoxs.length;i++){
						console.log(checkBoxs[i].checked)
						if(checkBoxs[i].checked){
							checkBoxs[i].checked=false;
						}
					}
				}
		  //数据的总和
		//   console.log(1010)
		  that.sum();
	 }
	}
	sum(){
		 //单选和数据总和
		 console.log(1)
		 var divs=document.querySelectorAll(".body");
		 var count=0;//总数
		 var sumPrice=0;//总价
		 for(var i=0;i<divs.length;i++){
		//  console.log(divs[i].querySelector("#car .check").checked)
		if(divs[i].querySelector(".check").checked){
		// console.log(divs[i].querySelector(".count").value)
		 count+=parseInt(divs[i].querySelector(".count").value);
		 sumPrice+=parseInt(divs[i].querySelector(".priceCount").innerHTML);
			}
		} 
		// console.log(count)  
		// console.log(sumPrice)  
		 document.querySelector("#toalCount").innerHTML=parseInt(count);
		 document.querySelector("#toalPrice").innerHTML='￥'+sumPrice.toFixed(2);
	}
	render(){
		this.initial=document.querySelectorAll("#priceCount");
		this.price=document.querySelectorAll(" .price");
		this.contprice=document.querySelectorAll(".priceCount");
		this.input=document.querySelectorAll(".count");
	   for(var i=0;i<this.initial.length;i++){
			// console.log(input)
			// //计算显示数据
			var newprice=parseInt(this.price[i].textContent.slice(1,this.price[i].textContent.length))*this.input[i].value;
			// console.log(newprice)
			this.contprice[i].innerHTML=newprice;
		}
		// this.single=document.querySelectorAll(".body .count");
	}
	// setData(callback){
	// 	for(var i=0;i<this.goods.length;i++){
	// 		if(this.goods[i].id==this.id){
	// 			callback(i)
	// 		}
	// 	}
	// 	localStorage.setItem("goods",JSON.stringify(this.goods));
	// }

	init(){
		var that=this;
		ajaxPost(this.url,function(res){
		   that.res=JSON.parse(res);
		//    that.getData();
		})
	}
	// getData(){
	// 	this.goods=localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")):[];
	// 	console.log(this.goods)
	// 	this.display()
	// } 
	display(){
		var str="";
		for(var i=0;i<this.res.length;i++){
			for(var j=0;j<this.goods.length;j++){
				if(this.res[i].goodsId==this.goods[j].id){
					str+=` 
					<div class="body" index="${this.res[i].goodsId}">
						<div class="chose" >
						<input type="checkbox"class="check"/>
						</div>
						<div class="imga">
						<img src="${this.res[i].src}">
						</div>
						<div class="msg">
						<span  class="">
						 ${this.res[i].descr}
						</span>
						</div>
						<div class="pric">
						<span class="price">￥${this.res[i].price}</span>
						</div>
						<div class="btnmt">
						<button class="small-button t2">-</button>
						<input class="count" type="text" size="2" value="${this.goods[j].num}" min="1">
						<button class="small-button">+</button>
						</div>
						<div class="unit ">
						<span class="priceCount" id="priceCount">${this.res[i].price}</span>
						</div>
						<div class="cut">
						<a href="javascript:void(0);" class="t4 del">删除</a>
						</div>
					</div>`
				}
			}
		}
this.check=document.querySelector(".ckeck");
this.body.innerHTML=str;
this.render()
	//全选
this.all();
this.changecount();
	}
 }
   
new car();





