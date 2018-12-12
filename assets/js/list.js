// 清除广告图
$(function(){
	$("button").click(function(){
		$(".top_adpic").fadeOut();
		$(this).fadedOut().css("border","0");
})
})
//选项卡

$(function(){
	var lis=[];
	$('#beauty_tab li').each(function(){
		lis.push($(this).index());
	})
	console.log(lis);
	var divs=[];
	$('#beauty_cont div').each(function(){
		divs.push($(this).index());
	})
	console.log(divs);
	$('#beauty_tab li').mouseover(function(){
		var index=$(this).index();
		$('#beauty_tab li').eq(index).mouseover(function(){
			$('#beauty_cont div').eq(index).show();
		}).mouseout(function(){
			$('#beauty_cont div').eq(index).hide();
		})
	})
	$('#beauty_cont div').mouseover(function(){
		$(this).show();
	}).mouseout(function(){
		$(this).hide();
	})	
})
//轮播图
// 轮播图
$(function () {
			// 声明变量
			var m=0;
			// 显示函数
			function sh(){
				// 图片
				$('.lun_img li').eq(m).fadeIn(300).siblings('li').hide();
				// 数字
				$('.lun_num li').eq(m).addClass('lun_show').siblings('li').removeClass('lun_show');
			}

			// 封装函数
			function piao(){
				// 自动轮播
				s=setInterval(function(){
					// 下标自增
					m++;
					// 判断m的值
					if(m>6){
						m=0;
					}
					sh(m);
				},4000)
			}

			// 调用函数
			piao();
			// 鼠标移入数字 显示对应的图片
			$('#lun_pic').mouseover(function(){
				// 清除定时器
				clearInterval(s);
				// 显示箭头
				$('.lun_left,.lun_right').show();
			}).mouseout(function () {
				// 继续轮播 隐藏箭头
				piao();
				$('.lun_left,.lun_right').hide();

			})
			
			// 鼠标移入数字 显示对应的图片
			$('.lun_num li').mouseover(function () {
				m=$(this).index();
				sh(m);
			})

			// 下一张
			$('.lun_right').click(function () {
				// 下标自增
				m++;
				// 判断m的值
				if(m>6){
					m=0;
				}
				sh(m);
			})

			// 上一张
			$('.lun_left').click(function () {
				// 下标自增
				m--;
				// 判断m的值
				if(m<0){
					m=6;
				}
				sh(m);
			})

		})

// 选项卡
function tab1(){

		var title = document.getElementById('beau_bul');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('beau_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='beau_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'beau_cur';
               conli[this.index].className ='';

            }
		}

}
tab1()
// 轮播图
$(function () {
			// 声明变量
			var o=0;
			// 显示函数
			function kk(){
				// 图片
				$('.toplun_img li').eq(o).fadeIn(300).siblings('li').hide();
				// 数字
				$('.toplun_num li').eq(o).addClass('toplun_show').siblings('li').removeClass('toplun_show');
			}

			// 封装函数
			function lll(){
				// 自动轮播
				zs=setInterval(function(){
					// 下标自增
					o++;
					// 判断m的值
					if(o>1){
						o=0;
					}
					kk(o);
				},5000)
			}

			// 调用函数
			lll();
			// 鼠标移入数字 显示对应的图片
			$('#toplun_pic').mouseover(function(){
				// 清除定时器
				clearInterval(zs);
				// 显示箭头
				$('.toplun_left,.toplun_right').show();
			}).mouseout(function () {
				// 继续轮播 隐藏箭头
				piao();
				$('.toplun_left,.toplun_right').hide();

			})
			
			// 下一张
			$('.toplun_right').click(function () {
				// 下标自增
				o++;
				// 判断m的值
				if(o>6){
					o=0;
				}
				kk(o);
			})

			// 上一张
			$('.toplun_left').click(function () {
				// 下标自增
				o--;
				// 判断m的值
				if(o<0){
					o=1;
				}
				kk(o);
			})

		})
// 选项卡
function tab2(){

	var title = document.getElementById('hotlist_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('hotlist_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='hotlist_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'hotlist_cur';
               conli[this.index].className ='';

            }
		}
}
tab2()
// 选项卡
function tab3(){

	var title = document.getElementById('shop_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('shop_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='shop_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'shop_cur';
               conli[this.index].className ='';

            }
		}
}
tab3()
// 选项卡
function tab4(){

	var title = document.getElementById('base_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('base_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='base_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'base_cur';
               conli[this.index].className ='';

            }
		}
}
tab4()

// 选项卡
function tab5(){

	var title = document.getElementById('shu_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('shu_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='shu_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'shu_cur';
               conli[this.index].className ='';

            }
		}
}
tab5()

// 选项卡
function tab6(){

	var title = document.getElementById('color_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('color_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='color_hide';
               }

               //4. 鼠标滑过s哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'color_cur';
               conli[this.index].className ='';

            }
		}
}
tab6()

// 选项卡
function tab7(){

	var title = document.getElementById('man_tab');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('man_tabimg');
		var conli = con.getElementsByTagName('li');//返回集合
        // 1.给每个 lis 添加鼠标滑过事件
		for(var i = 0; i<lis.length;i++ ){
			// 2. 给对象添加index 属性来存 i值
			/*
               obj = {};
               obj.index = 2;
			*/
			lis[i].index = i;
            lis[i].onmouseover = function(){
              //console.log(this.index); //得到正确的索引值
               // 3.先初始化 所有 lis 去掉.cur ,condiv 添加 .hide 隐藏
               for(var j = 0 ; j< lis.length;j++){
                   lis[j].className = '';
                   conli[j].className ='man_hide';
               }

               //4. 鼠标滑过s哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'man_cur';
               conli[this.index].className ='';

            }
		}
}
tab7()
// 楼层
$(function (){

			// 点击楼层li 滚动到指定的位置
			$('.floor_ul li').click(function(){
				// 获取当前li的下标
				var index=$(this).index()-1;
				console.log(index);

				// 找到对应的.floor距离顶部的位置
				console.log($('.floor').eq(index).offset());

				// 将获取的值 给滚动条 滚动到指定的 位置
				var top=$('.floor').eq(index).offset().top;
				// $('html').scrollTop(top);
				// 加动画
				$('html').animate({scrollTop:top},500);
			})

			//根据当前滚动位置 判断处于几楼

			// 把所有楼层距离顶部的位置放入数组
			var heights=[];
			// 遍历添加数组 向数组
			$('.floor').each(function () {
				heights.push($(this).offset().top)
			})
			console.log(heights);


			// 滚动监听事件
			$(window).scroll(function () {
				// 获取当前滚动的距离
				var top=$(window).scrollTop();
				console.log(top);

				
				// 遍历判断 在几楼
				for (var i = 0; i < heights.length; i++) {
					// top>=100 <720 一层
					if(top<heights[0]-160){
						$('.floor_ul').css("display","none")
					}else if (top>=heights[i]-80 && top<heights[i+1]) {
						//找到对用的楼层 需要当前下标
						var index=i;
						// 赋值给1F 背景
						$('.floor_ul').css("display","block")
						$('.floor_ul li').eq(index).css("color","#FF4265").siblings().css("color","#777")
					
					//7楼没有小于8楼
					}else if (top>=heights[heights.length-1]) {
						//7楼自己的下标
						index=heights.length-1;
						$('.floor_ul li').eq(index).css("color","#FF4265").siblings().css("color","#777")
					}
				}
			})
		})