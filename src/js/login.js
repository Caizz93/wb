;jQuery(function($){
	//验证码生成
	function rad(){

		var yzm_str = "0123456789abcdefghijklmopqrstuvwxyz"
		var yzm ="";
		for(var i = 0 ; i < 4 ; i++){
			var idx = parseInt(Math.random() * yzm_str.length);
			yzm += yzm_str[idx];
		}
		return yzm;
	};
	var rad_yzm = rad();
	var a = false, b=false, c=false,d=false;
	$('.yanzhengma').html(rad_yzm);
	$('#login1').on('change',function(){
		var $str = $("#login1").val();
		var reg = /^1[3-8]\d{9}$/;
		$str = $.trim($str);
		// var str = $str.get();
		
		if(!reg.test($str)){
			a = false;
			$('.login1_warm').html('请输入正确的手机格式').show();
			return;
		}else{
			a=true;
			$('.login1_warm').html("");
		}


	});


	$('#login2').on('change',function(){
		var $str = $("#login2").val();
		//var reg = /^1[3-8]\d{9}$/;
		$str = $.trim($str)	;
		// var str = $str.get();
		
		$('.yanzhengma').html(rad_yzm);
		if($str != rad_yzm){
			b=false;
			$('.login2_warm').html('请输入正确的验证码').show();
			rad_yzm = rad();
			$('.yanzhengma').html(rad_yzm);
			return;
		}else{
			b=true;
			$('.login2_warm').html("");
		}
		
	});
	var pas;
	$('#login4').on('change',function(){
		var $str = $("#login4").val();
		var reg = /^[^\d][\w]{5,19}$/;
		$str = $.trim($str);
		pas = $str;
		// var str = $str.get();
		if(!reg.test($str)){
			c=false;
			$('.login4_warm').html('请输入由数字字母下划线组成非数字开头的6-20密码').show();
			return;
		}else{
			c=true;
			$('.login4_warm').html("");
		}
	});
	$('#login5').on('input',function(){
		var $str = $("#login5").val();
		if( $str != pas){
			d=false;
			$('.login5_warm').html('两次密码不一致').show();
			return;
		}else{
			d=true;
			//console.log(pas,phone);
			$('.login5_warm').html("");

		}
	})





	$('#czz_btn_tw').on('click',function(){

		var phone = $('#login1').val();
		var password=$('#login4').val();
		
		if(a && b && c && d){
			$.ajax({
				type:"POST",
				url:"../api/login.php",
				data:{
					phone:phone,
					password:password
				},
				success:function(msg){
					if(msg==="0"){
						alert('此电话已被注册！');
					}else if(msg==="1"){
						$.ajax({
							type:'get',
							data:{
								phone:phone
							},
							url:'../api/user.php',
							success:function(){
								var date = new Date();  
								date.setDate(date.getDate() -1); 
								
								document.cookie = 'wbuser = null' +';expires='+date.toUTCString()+';path=/';	
								
								document.cookie = 'wbuser=' + phone +';path=/';
							}
						});
						location.href ="http://localhost:8080/";
					}
				}
			})
		}else{
			return;
		}
		

	})	
	
});