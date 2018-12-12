// 清除广告图
$(function(){
	$("button").click(function(){
		$(".top_adpic").fadeOut();
		$(this).fadedOut();
})
})
// 选项卡
//选项卡

$(function(){
	var lis=[];
	$('#tab_ul li').each(function(){
		lis.push($(this).index());
	})
	console.log(lis);
	var divs=[];
	$('#tab_cont div').each(function(){
		divs.push($(this).index());
	})
	console.log(divs);
	$('#tab_ul li').mouseover(function(){
		var index=$(this).index();
		$('#tab_ul li').eq(index).mouseover(function(){
			$('#tab_cont div').eq(index).show();
		}).mouseout(function(){
			$('#tab_cont div').eq(index).hide();
		})
	})
	$('#tab_cont div').mouseover(function(){
		$(this).show();
	}).mouseout(function(){
		$(this).hide();
	})	
})
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
					if(m>7){
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
				if(m>7){
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
					m=7;
				}
				sh(m);
			})

		})
// 倒计时
function out(){
	var box1 = document.getElementById('time_box1');
	var box2 = document.getElementById('time_box2');
	var box3 = document.getElementById('time_box3');
    getTime()
	setInterval(getTime,1000);
		function getTime(){
			 // 距离 2018-10-01 还有 n天n小时n秒 
			var d = new Date();
			// 获得的当前时间的时间戳
			var ctime = d.getTime();
			var f = new Date('2018-11-01 00:00:00');
			//console.log(ftime); 
			// 获得的未来时间的时间戳 
			var ftime = f.getTime();
			// 获得 ftime - ctime 两个时间戳的差
			var sytime = ftime -ctime;


			// 获得天数 1000毫秒= 1秒  1秒*60 =1分钟 1分钟*60 =1小时 1小时*24 =1天
			// 天数 = Math.floor(两个时间戳的差/1天的毫秒数）
			var day =  Math.floor(sytime /(1000*60*60*24));
			// 剩余的时间戳 = 两个时间戳的差 %1天的毫秒数= 余下不够一天的毫秒数
			var sytime = sytime % (1000*60*60*24);

			// 获得小时 = Math.floor( 当前剩余的时间戳/1小时的毫秒数）
			var hours = Math.floor(sytime/(1000*60*60));
			if(hours<10){
				hours='0'+hours;
			}
			// 剩余的时间戳 =当前剩余的时间戳 %1小时的毫秒数= 余下不够1小时的毫秒数
			var sytime = sytime %(1000*60*60);
			// 获得分钟
			var minutes = Math.floor(sytime/(1000*60));
			if(minutes<10){
				minutes='0'+minutes;
			}
			// 剩余的时间戳
			var sytime = sytime %(1000*60);
			// 获得秒数
			var seconds = Math.floor(sytime/1000);
			if(seconds<10){
				seconds='0'+seconds;
			}
			
			box1.innerHTML=hours;
			box2.innerHTML=minutes;
			box3.innerHTML=seconds;
		}
}
out();

// 倒计时最右侧div轮播
$(function(){
			var i=0;
			var timer;
			function turnPic(){
				//图片
				$('.kill_lunimg li').eq(i).fadeIn(500).siblings().hide();
				//下边框圆标
				$('.kill_lunnum li').eq(i).addClass('kill_lunnumshow').siblings().removeClass('kill_lunnumshow');
			}
			//自动轮播
			function autoPic(){
				timer=setInterval(function(){
					i++;
					if(i>1){
						i=0;
					}
					turnPic();
				},3000)
			}
			autoPic();
			//鼠标移入 清除定时器 鼠标移出 继续轮播
			$('#kill5').mouseover(function(){
				clearInterval(timer);
			}).mouseout(function(){
				autoPic();
			})
			//鼠标移入圆标 显示对应的图片
			$('.kill_lunnum li').mouseover(function(){
				i=$(this).index();
				turnPic(i);
			})
		})

//排行榜选项卡
function oii(){

var title = document.getElementById('list_title');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('list_con');
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
                   conli[j].className ='con_hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'list_cur';
               conli[this.index].className ='';

            }
		}


}
oii()

//菜单栏挂起
		$(function(){
			window.onscroll=function(){
				var y=document.documentElement.scrollTop
				if(y>670){
					$('.nav').css('display','block').css('position','fixed').css('top','0px')

				}else if(y<670){
					$('.nav').css('display','none')
				}
			}

		})

// 会买中间 轮播图
$(function(){
			var j=0;
			var timer;
			function turnPic(){
				//图片
				$('.huimai_lunimg li').eq(j).fadeIn(500).siblings().hide();
				//下边框圆标
				$('.huimai_lunnum li').eq(j).addClass('huimai_lunnumshow').siblings().removeClass('huimai_lunnumshow');
			}
			//自动轮播
			function autoPic(){
				timer=setInterval(function(){
					j++;
					if(j>2){
						j=0;
					}
					turnPic();
				},3000)
			}
			autoPic();
			//鼠标移入 清除定时器 鼠标移出 继续轮播
			$('#huimai2').mouseover(function(){
				clearInterval(timer);
			}).mouseout(function(){
				autoPic();
			})
			//鼠标移入圆标 显示对应的图片
			$('.huimai_lunnum li').mouseover(function(){
				j=$(this).index();
				turnPic(j);
			})
		})

//券 轮播图
$(function(){
			var z=0;
			var timer;
			function turnPic(){
				//图片
				$('.quan_lunimg li').eq(z).fadeIn(500).siblings().hide();
				//下边框圆标
				$('.quan_lunnum li').eq(z).addClass('quan_lunnumshow').siblings().removeClass('quan_lunnumshow');
			}
			//鼠标移入圆标 显示对应的图片
			$('.quan_lunnum li').mouseover(function(){
				z=$(this).index();
				turnPic(z);
			})
		})

//觅me 轮播图
$(function(){
			var o=0;
			var timer;
			function turnPic(){
				//图片
				$('.meme_lunimg li').eq(o).fadeIn(500).siblings().hide();
				//下边框圆标
				$('.meme_lunnum li').eq(o).addClass('meme_lunnumshow').siblings().removeClass('meme_lunnumshow');
			}
			//自动轮播
			function autoPic(){
				timer=setInterval(function(){
					o++;
					if(o>2){
						o=0;
					}
					turnPic();
				},3000)
			}
			autoPic();
			//鼠标移入 清除定时器 鼠标移出 继续轮播
			$('#meme').mouseover(function(){
				clearInterval(timer);
			}).mouseout(function(){
				autoPic();
			})
			//鼠标移入圆标 显示对应的图片
			$('.meme_lunnum li').mouseover(function(){
				o=$(this).index();
				turnPic(o);
			})
		})

// 特色推荐轮播图
$(function () {
			// 声明变量
			var t=0;
			
			// 显示函数
			function tsh(){
				// 图片
				$('.spe_img li').eq(t).fadeIn(300).siblings('li').hide();
				// 数字
				$('.spelun_num li').eq(t).addClass('spelun_show').siblings('li').removeClass('spelun_show');
			}

			// 封装函数
			function tpiao(){
				// 自动轮播
				ts=setInterval(function(){
					// 下标自增
					t++;
					// 判断m的值
					if(t>3){
						t=0;
					}
					tsh(t);
				},4000)
			}

			// 调用函数
			tpiao();

			// 鼠标移入数字 显示对应的图片
			$('#special_lun').mouseover(function(){
				// 清除定时器
				clearInterval(ts);
				// 显示箭头
				$('.spelun_left,.spelun_right').show();
			}).mouseout(function () {
				// 继续轮播 隐藏箭头
				tpiao();
				$('.spelun_left,.spelun_right').hide();

			})
			
			// 鼠标移入数字 显示对应的图片
			$('.spelun_num li').mouseover(function () {
				t=$(this).index();
				tsh(t);
			})

			// 下一张
			$('.spelun_right').click(function () {
				// 下标自增
				t++;
				// 判断m的值
				if(t>3){
					t=0;
				}
				tsh(t);
			})

			// 上一张
			$('.spelun_left').click(function () {
				// 下标自增
				t--;
				// 判断m的值
				if(t<0){
					t=3;
				}
				tsh(t);
			})

		})




			var dian=document.getElementById('dian');
            var left=document.getElementById('left');
            var right=document.getElementById('right');
            var ul=dian.getElementsByTagName('ul')[0];
        

            function off(aa){
                // 获取当前ul的位置 +指定的移动距离
                var l=parseInt(ul.style.left)+aa;

                console.log(l);

                //重新赋值
                ul.style.left=l+'px';

                if(l<=-2364){
                    ul.style.left='-1576px';
                }

                // 0 的时候 最后
                if (l>=0) {
                    ul.style.left='0px';
                }

            }

            // off(-300);

            // 左边点击
            left.onclick=function(){
                off(788);
            }
            // 右击
            right.onclick=function(){
                off(-788);
            }


// }