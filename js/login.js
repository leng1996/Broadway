
		class Login{
			constructor(){
				this.url = "http://localhost/Broadway/libs/jsonp3.php";
				// this.url = "http://www.icodeilife.cn/ctrl/login.php";
				// this.user = document.getElementById("user");
				// console.log(this.user)
				
				this.init()
			}
			init(){
//				console.log($("#btn")
				var that = this;
				$("#btn").click(function(){
					that.load()
				})
			}
			load(){
				var that = this;
				$.ajax({
					url:this.url,
					data:{
						user:$("#user").val(),
						pass:$("#pass").val()
					},
					success:function(res){
						switch(res){
							case "0":
								$("span").html("用户名密码不符");break;
							case "2":
								$("span").html("重新登录");break;
							default:
//								因为接口问题,返回json数据时表示成功,json数据不好判断,所以,直接使用default判断
								$("span").html("登录成功，一大波折扣正在来袭！");
								localStorage.setItem("luke","123")
								that.res = JSON.parse(res)
								setTimeout(function(){
									location.href = "index.html";
								},2000)
								console.log(that.res)
						}
					},
//					beforeSend:function(){
//						$("span").html("<img src='loading.gif'>")
//					}
				})
			}
		}
		
		new Login;
	