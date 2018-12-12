<?php
	// 接收传递来的值
	$value=$_POST['value'];
	// echo $value;

	// 声明以存在的用户名
	$arr=['刘畅','qqq','aaa','zzz','ccc','www','sss'];

	// 判断 传来的值是否已存在
	if(in_array($value,$arr)){
		// 已存在
		echo 'y';
	}else{
		//不存在
		echo "n";
	}



?>