
jQuery($=>{
	$('.close_siderheader').on('click',()=>{
		$('#sider_header').hide();
		
	});

	$('.one').on('mouseenter','span',function(e){
		if(e.target.className=="tw_r_s2"){
			$('.tw_r_p1','.one').hide();
			$('.tw_r_p2','.one').show();
			$('.tw_r_s1','.one').css('border-bottom','2px solid #eee');
			$('.tw_r_s2','.one').css('border-bottom','2px solid #666');
		}else if(e.target.className=="tw_r_s1"){
			$('.tw_r_p2','.one').hide();
			$('.tw_r_p1','.one').show();
			$('.tw_r_s2','.one').css('border-bottom','2px solid #eee');
			$('.tw_r_s1','.one').css('border-bottom','2px solid #666');
		}

	});

	$('.two').on('mouseenter','span',function(e){
		//console.log(e.target.className);
		if(e.target.className=="tw_r_s2"){
			$('.tw_r_p1','.two').hide();
			$('.tw_r_p2','.two').show();
			$('.tw_r_s1','.two').css('border-bottom','2px solid #eee');
			$('.tw_r_s2','.two').css('border-bottom','2px solid #666');
		}else if(e.target.className=="tw_r_s1"){
			$('.tw_r_p2','.two').hide();
			$('.tw_r_p1','.two').show();
			$('.tw_r_s2','.two').css('border-bottom','2px solid #eee');
			$('.tw_r_s1','.two').css('border-bottom','2px solid #666');
		}

	});


	$('.wcats').on('mouseenter',function(){
		$('a','.wcats').css({
			"border":"1px solid #ccc",
			"borderBottom":"1px solid #fff"
		})
		$('.wbiaoapp').stop().animate({
			height:186
			
		},function(){
			$('.change').show(200);
		}).css("border","1px solid #ccc")
	});

	$('.wcats').on('mouseleave',function(){
		$('a','.wcats').css({
			"border":"none"});		
		$('.change').hide(200);
		$('.wbiaoapp').stop().animate({
			height:0	
		}).css("border","none")
	});

		// console.log($('li','.change').eq(1))
		$('li','.change').eq(1).on('mouseover',function(){
			$('img','.wbiaoapp').attr('src','img/wbwx.png');
		});
		$('li','.change').eq(0).on('mouseover',function(){
			$('img','.wbiaoapp').attr('src','img/wbgb .jpg');
		});


	// $('a','#list_show').on('mouseenter',function(){
	// 	$('.nav_header_fo').toggle();		
	// })

	//登录操作
	//var login_name = location.search;
	//login_name = login_name.split('=');
	var phone;
	var cookies = document.cookie;	
	cookies = cookies.split('; ');
	
	cookies.forEach(function(item){
		item = item.split('=');
		if(item[0] == 'wbuser'){
			phone = item[1];
			$('#login_name').html('你好，'+ item[1]).css({
				'line-height':'29px',
				'font-size':'12px'
			});
		}
	});

	// if(login_name[0]=='phone'){

	// 	$('#login_name').html('你好，'+ login_name[1]).css({
	// 		'line-height':'29px',
	// 		'font-size':'12px'	
	// 	});


	// }

	$('.icon-03').on('click',function(){
		location.href = 'http://localhost:8080/html/shopping_car';
	});

	//ajax请求购物车商品数量

	$.ajax({
		type:"get",
		data:{
			phone:phone
		},
		url:"http://localhost:8080/api/shuliang",
		success:function(msg){
			$('.shuliang').html(msg);
		}
	})

});

