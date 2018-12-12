function fff(){
       var small = document.getElementById('small'),
		    smallimg = document.getElementById('small').getElementsByTagName('img')[0],
		    mask = document.getElementById('mask'),
		    big = document.getElementById('big'),
		    bigimg = big.getElementsByTagName('img')[0],
		    fdj = document.getElementById('wrap');
		    //console.log(smallimg);
		//事件：  onmouseover 鼠标滑过 , onmouseout 鼠标滑离

		//1. 鼠标滑过small盒子显示 big盒子和mask色块
        small.onmouseover = function(){
        	 big.style.display = 'block';
        	 mask.style.display ='block';
        	 // 3.设置色块宽和高  offsetWidth
        	 // x/smallimg.w = big.w/bigimg.w
        	 // x = big.w/bigimg.w*smallimg.w
             mask.style.width  = big.offsetWidth/bigimg.offsetWidth*smallimg.offsetWidth+'px';
             mask.style.height = big.offsetHeight/bigimg.offsetHeight*smallimg.offsetHeight+'px';
             // 4.色块跟随鼠标移动
             fdj.onmousemove = function(e){
                 var left = e.pageX - wrap.offsetLeft -mask.offsetWidth/2;
                 var top =  e.pageY - wrap.offsetTop -mask.offsetHeight/2; 
                 console.log(left);
                 // 5. 色块坐标的临近值
                 if(left<0){
                    left = 0;
                 }else if(left >small.offsetWidth-mask.offsetWidth){
                    left = small.offsetWidth-mask.offsetWidth;
                 }
                 if(top<0){
                    top = 0;
                 }else if(top >small.offsetHeight-mask.offsetHeight){
                    top = small.offsetHeight-mask.offsetHeight;
                 }


                 //4.1 设置色块坐标
                 mask.style.left = left + 'px';
                 mask.style.top =  top + 'px';
                 console.log(mask.style.left);
                 console.log(mask.style.top);

                 // 4.2 设置大图的坐标,大图在大盒子移动
                 // mask.left / ?  = smallimg.w/bigimg.w
                 // ? = mask.left*(bigimg.w/smallimg.w)
                 bigimg.style.left = -left*(bigimg.offsetWidth/smallimg.offsetWidth) + 'px';
                 bigimg.style.top =  -top*(bigimg.offsetHeight/smallimg.offsetHeight) + 'px';
             }

        }
		//2. 鼠标离开small盒子隐藏 big盒子和mask色块
		small.onmouseout = function(){
			 big.style.display = 'none';
        	 mask.style.display ='none';
		}


        // 原生js
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
                //判断走 到-300
                if(l<=-64){
                    ul.style.left='-64px';
                }

                // 0 的时候 最后
                if (l>=0) {
                    ul.style.left='0px';
                }

            }

            // off(-300);

            // 左边点击
            left.onclick=function(){
                off(64);
            }
            // 右击
            right.onclick=function(){
                off(-64)
            }

}
fff()
$(function(){
             // 滑过更换图片
            $('#dian li').mouseover(function(){
                // small big src=当前
                    var a=$(this).index()+1;
                    console.log(a);
                // console.log($(this).attr("src"));
                $('#big>img').attr("src",'assets/images/fangbig'+a+'.jpg');
                $('#small>img').attr("src",'assets/images/fang'+a+'.jpg');
               
           
               
            })
            $('#dian li').mouseover(function(){
                $(this).css('border-color','#E53E41');
            })
             $('#dian li').mouseout(function(){
                $(this).css('border-color','white');
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
            lis[i].onclick = function(){
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


var cont=document.getElementById('cont');
        // 滚动事件
        window.onscroll=function(){
            // 每次滚到到底部 就请求数据
            // 文档总高度
            var aHeight=document.documentElement.offsetHeight;
            console.log(aHeight);
            // 可视区域高度
            var cHeight=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;
            console.log(cHeight);
            // 滚动高度
            var sHeight=document.documentElement.scrollTop||document.body.scrollTop;
            console.log(sHeight);

            // 每次滚到到底部=总高度-可视区域高度
            if(aHeight-cHeight<=sHeight){
                // 建立ajax请求数据
                Ajax('JSON').get('1.php',function(msg){
                    console.log(msg);
                    // console.log(msg[0]["pic"]);
                    // console.log(msg[1]["pic"]);
                    // console.log(msg[2]["pic"]);
                    // console.log(msg[3]["pic"]);

                    // 声明空格字符串
                    var str='';

                    //for in 遍历对象 遍历4次 
                    for(var i in msg){
                        // console.log(msg[i]["pic"]);
                        str+='<img src="'+msg[i]["pic"]+'">';
                    }
                    //输出
                    console.log(str);

                    // 如果加载到高度为20000
                    if(aHeight>=30890){
                        cont.innerHTML=cont.innerHTML;

                    }else{
                        // 原有的图片加上闲情请求的图片
                        cont.innerHTML+=str;
                    }
                });
            }
        }

