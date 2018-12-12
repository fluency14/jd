		 // 登录选项卡
function logintab(){

var title = document.getElementById('title');
		var lis = title.getElementsByTagName('li');//返回集合
		var con = document.getElementById('con');
		var condiv = con.getElementsByTagName('li');//返回集合
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
                   condiv[j].className ='hide';
               }

               //4. 鼠标滑过哪个lis 给当前lis添加 .cur样式,同时对应con 对应的内容 显示出来(去掉hide)
               lis[this.index].className = 'cur';
               condiv[this.index].className ='';

            } 
		}  
}
logintab();

// 登录验证

  var input=document.getElementsByTagName('input')[0];
    var sp=document.getElementById('login_p');
     var pwd = document.getElementById('pwd');
      var  pMsg = document.getElementById('pMsg');
   console.log(sp);

    // 通过失去焦点事件 进行ajax请求
    input.onblur=function(){
      // 获取input的value值
      var uname=this.value;
      // console.log(uname);

      // 将获取的值发送到服务器文件
      Ajax().post('2.php','value='+uname,function(msg){
        console.log(msg);

        if (msg=='y') {
          // 不能登录
          sp.innerHTML='恭喜!用户名存在,可以登录!'
          sp.style.color='green';
        }else{
          // 能登录
          sp.innerHTML='对不起,此用户名不存在!'
          sp.style.color='red';
        }
      });
}
pwd.onfocus = function(){
              pMsg.innerHTML = '请输入6-15位密码';
              pMsg.className = '';
            }
            pwd.onblur = function(){
              var val = this.value.trim();
              var reg =/^[\w\-]{6,15}$/;
              if(reg.test(val)){
                   pMsg.innerHTML = '密码正确!';
                   pMsg.style.color='green';
                   
              }else{
                   pMsg.innerHTML = '密码不正确!';
                   pMsg.className ='err';
                   pMsg.style.color='red';
                 
              }
            }
