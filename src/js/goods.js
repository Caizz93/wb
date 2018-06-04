;jQuery(function($){
	//ajax请求获取数据；
	var id = location.search;
	//console.log(id);
	id = id.slice(1);
	//console.log(id);
	id = id.split('=');
	//console.log(id);
	var abc = id[1];
	$.ajax({
		type:'get',
		url:'../api/goods.php',
		data:{
			id:abc
		},
		success:function(msg){
			
			var goods = JSON.parse(msg);
			var a = (goods[0].id % 50) + 1; 
			var $img = $('<img/>').attr('src','../img/'+ a +'.jpg').addClass('big_img');
			$img.appendTo($('.big_pic'));

			var b = (goods[0].id % 2);

			if(b == 0){
				for(let i = 1 ; i <=5 ; i++ ){

					var $s_img1 = $('<img/>').attr({
						'src':'../img/detail_gooda'+ i +'.png',
						'data-img':'../img/detail_goodaa'+ i +'.png'
					}).addClass('s_img');
					$s_img1.appendTo('.detail_pic');
				}

			}else if( b == 1){
				for(let i = 1 ; i <=3 ; i++ ){

					var $s_img2 = $('<img/>').attr({
						'src':'../img/detail_goodb'+ i +'.png',
						'data-img':'../img/detail_goodbb'+ i +'.png'
					}).addClass('s_img');
					$s_img2.appendTo('.detail_pic');
				}	
			}


			//点击切换图片
			$('.detail_pic').on('click','img',function(e){
				var target = $(e.target);
				var $img = $(this).attr('data-img');
				$('.big_img').attr({
					'src':$img
				})

			});

			//放大镜
			$('.big_pic').on('mousemove',function(e){

				var $img_w = $('.big_pic').height();

				var $img_h = $('.big_pic').width();

				var $url = $('.big_img').attr('src');

				var percent_w = e.offsetX/$img_w;
				var percent_h = e.clientY/$img_h; 

				//console.log($url);
				$('.big_img').hide();
				//console.log($img_w * 4,$img_h)
				//$('.big_img').height($img_h * 4).width($img_h *4);
				$('.big_pic').css({
					'background':'url('+$url+') no-repeat',
					'background-size':'1000px 1000px',
					'background-position': -Math.round(500*percent_w) +'px '+ -Math.round(500*percent_h) +'px'
				});


			});


			$('.big_pic').on('mouseleave',function(e){

				var $img_w = $('.big_pic').height();

				var $img_h = $('.big_pic').width();

				var $url = $('.big_img').attr('src');

				//console.log($url);
				$('.big_img').show();
				//console.log($img_w * 4,$img_h)
				//$('.big_img').height($img_h * 4).width($img_h *4);
				$('.big_pic').css({
					'background':'none'
				});
			});


			//goods_main_tw 放大镜右边部分

			// var $r_p1 = $('<p/>').text(goods[0].name).addClass('goods_detail_title');
			// var $r_p2 = $('<p/>').text(goods[0].sale).addClass('good_detail_sale');
			// var $r_p3 = $('<p/>').text(goods[0].price).addClass('good_detail_price');
			$('.main_tw_p1').text(goods[0].name);
			$('.main_tw_p2').text(goods[0].sale);
			$('.red_price').text("￥"+goods[0].price);

			//款式选择功能
			$('.main_tw_p5').on('click','img',function(e){console.log(666)
				var target = e.target;
				$('img','.main_tw_p5').css({
					'border':"2px solid #ccc"
				});

				$(this).css({
					'border':"2px solid #333"
				});

				var $left = $(this).attr("data-left");

				$('.mark','.main_tw_p5').css({
					left:$left
				})
			});

			//商品数量增减功能
			var qty = 1;


			$('.main_tw_p6').on('click','span',function(e){
				var target = $(e.target);
				//console.log( $('.qty_res').val());
				
				qty = $('.qty_res').val();
				if(target.text()=='-'){
					//qty = $('.qty_res').val();
					--qty;
				}
				if(target.text()=='+'){
					//qty = $('.qty_res').val();
					++qty;
				}
				if(qty <= 1){
					qty = 1;
				}
				$('.qty_res').val(qty);

				// if(target.Class()=='qty_res'){
				// 	console.log(666)
				// }
			});	

			//飞入购物车动画
			$('.add_car').on('click',function(){
				//飞入动画
				var $copy = $img.clone(true).appendTo('body');
				$copy[0].style.position = 'absolute';
				$copy.animate({
					'width':'0',
					'height':'0',
					'right':'0',
					'top':'0'
				},1000,function(){

					$(this).remove();
				});//动画尾巴

				//发送ajax请求把客户加入购物车详细信息录入mysql
				//有风险
				var cookies = document.cookie;	
				cookies = cookies.split('; ');
				var phone;
				cookies.forEach(function(item){
					item = item.split('=');
					if(item[0] == 'wbuser'){
						phone = item[1];
						$.ajax({
							type:'get',
							url:'../api/goodstosql.php',
							data:{
								phone:phone,
								id:goods[0].id,
								img : $img.attr('src'),
								shop:goods[0].shop,
								name:goods[0].name,
								price:goods[0].price,
								qty:qty
							}

						});
					}else{
						alert('请登录');
					}
				});
				// $.ajax({
				// 	type:'get',
				// 	url:'../api/goodstosql.php',
				// 	data:{
				// 		phone:phone,
				// 		id:goods[0].id,
				// 		img : $img.attr('src'),
				// 		shop:goods[0].shop,
				// 		name:goods[0].name,
				// 		price:goods[0].price,
				// 		qty:qty
				// 	}

				// });


			});//点击尾巴


			console.log($img.attr('src'))

		}//ajax请求.success尾巴
	});

});