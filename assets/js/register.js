		$(function () {
			setTimeout(function(){
				$(".register_mask,#show").show()
				$(".register_mask").css({
					"width":$(document).width(),
					"height":$(document).height()
				})
				$('#show').show();
			},1000)
			// a标签点击事件
			// $("a").eq(0).click(function(){
			// 	// 让遮罩显示
			// 	$(".register_mask").show();
			// 	
			// 	// 让拖拽元素显示
			// 	
			// })
			// 点击btn 隐藏
			$(".mask_agree").click(function(){
				$(".register_mask").fadeOut(1000);
				$("#show").fadeOut(1000);
			})

			// 拖拽 按下 移动 抬起
			$("#show").mousedown(function(e){
				// 鼠标指针
				$(this).css("cursor","move")
				// 获取当前show的偏移值
				var offset=$(this).offset();
				var x=e.pageX-offset.left;
				var y=e.pageY-offset.top;
				// console.log(x,y)
				// x  y 鼠标在show中按下的位置

				$(document).mousemove(function(e){
					// 移动的距离=当前的坐标-xy
					var ll=e.pageX-x;
					var tt=e.pageY-y;
					console.log(ll,tt);

					//判断边界
					if(ll<=0){
						ll=0
					}else if(ll>=$(document).width()-$("#show").width()){
						ll=$(document).width()-$("#show").width()
					}

					if (tt<=0) {
						tt=0
					}else if(tt>=$(document).height()-$("#show").height()){
						tt=$(document).height()-$("#show").height()
					}

					// 赋值
					$("#show").css({left:ll+'px',top:tt+'px'});
				})

			})

			// 鼠标抬起
			$(document).mouseup(function(){
				$(this).off("mousemove");
				$("#show").css("cursor","")

			})


		})
function login(){
    var frm = document.getElementById('frm'),
        user = document.getElementById('user'),
        // pwd = document.getElementById('pwd'),
        uMsg = document.getElementById('uMsg');
        // pMsg = document.getElementById('pMsg');
       
          var uBool=false;
              pBool=false;
            // 1.判断用户名称
            user.onfocus = function(){
              uMsg.innerHTML ='请输入11位的手机号'
              // 去掉class 名称
              uMsg.className = '';
            }
            user.onblur = function(){
              //1. 获得 user中的值 清除两边空格
              var val = this.value.trim();
              //console.log(val);
              var reg = /^1[3456789]\d{9}$/;// 4-20位字母数字 下划线，- 中文
              if(val.length==0){
                    uMsg.innerHTML = '手机号不能为空';
                    
                   // 添加class 名称
              }else if(reg.test(val)){
                   // 正确用户名称
                   uMsg.innerHTML = '手机号正确';
                   // 添加class 名称
                
              }else{
                   uMsg.innerHTML ='手机号不正确';
                   
              }
            }
           
            frm.onsubmit = function(){
              /*if(用户名不合法 !false || 密码不合法 !false){
                return false; // 阻止表单提交
              }
                   !(uBool && pBool)
              */
              if(!uBool){
                   return false;
              }
            }
}
login()