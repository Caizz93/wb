




define(['jquery'],function(){
	
	$(".enter_p2_s1","#enter_form").on('click',function(){
		$('#other_form').show();
	});

	$(".enter_p2_s1","#other_form").on('click',function(){
		$('#other_form').hide();
	});


	$(".enter_p1_s2","#enter_form").on('click',function(){
		$('#qrcode').show();
	});

	$(".enter_p1_s2","#other_form").on('click',function(){
		$('#qrcode').show();
	});


	$(".enter_p1_s1","#qrcode").on('click',function(){
		$('#qrcode').hide();
	});


	$(".qrcode_img1","#qrcode").on('mouseenter',function(){

		$(".qrcode_img1").stop().animate({left:20},500);console.log(666)
		$(".qrcode_img2").stop().animate({opacity:1},500)
	})
	$(".qrcode_img1","#qrcode").on('mouseleave',function(){

		$(".qrcode_img1").stop().animate({left:100},500);console.log(666)
		$(".qrcode_img2").stop().animate({opacity:0},500)
	});

	//点击提交
	$('#other_submit','#other_form').on('click',function(){
		var phone = $('#other_inp1','#other_form').val();
		var password = $('#other_inp2','#other_form').val();
		//console.log($('#other_inp1','#other_form').val(),$('#other_inp2','#other_form').val() );
		$.ajax({
			type:"POST",
			url:"../api/enter.php",
			data:{
				phone:phone,
				password:password
			},
			success:function(msg){
				if(msg=="0"){
					alert('手机号码与密码不匹配！');
				}else if(msg=="1"){
					// location.href = "http://localhost:8080/index.html?phone="+phone;
					var date = new Date();  
					date.setDate(date.getDate() -1); 
					
					document.cookie = 'wbuser = null' +';expires='+date.toUTCString()+';path=/';	
					
					document.cookie = 'wbuser=' + phone +';path=/';
					
					location.href = "../index.html?phone="+phone;

				}
			}
		})
	})



})