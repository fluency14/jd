<?php
	// 定义模拟的数据库
	$data=[
		["pic"=>"assets/images/pu".mt_rand(1,12).".jpg"],
		["pic"=>"assets/images/pu".mt_rand(1,12).".jpg"],
		["pic"=>"assets/images/pu".mt_rand(1,12).".jpg"],
		["pic"=>"assets/images/pu".mt_rand(1,12).".jpg"]
	];

	// 输出请求的数据
	echo json_encode($data);

?>