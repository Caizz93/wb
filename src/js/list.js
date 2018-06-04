;jQuery(function($){
	//分页数量
	let goods;
	function goodinto(goods){
		$('.goodslist','.list_search_tw').html('');
		for(var i = 0 ; i< goods.length; i++){
			var a = (goods[i].id % 50) + 1; 
			var $img = $('<img/>').attr('src','../img/'+ a +'.jpg').addClass('goods_img');
			var $a = $('<a/>').attr('href','goods.html?id=' + goods[i].id);

			$img.appendTo($a)

			var $p = $('<p/>').html(goods[i].price).addClass('goods_price');

			$('<span/>').html(goods[i].sale).addClass('goods_sale').appendTo($p);

			var $p1 =$('<p/>').html(goods[i].name).addClass('goods_name');

			var $span = $('<p/>').html(goods[i].shop).addClass('goods_shop');

			var $love = $('<a/>').addClass('love').html('加入收藏');

			var $car = $('<a/>').addClass('car').html('加入购物车');

			var $li = $('<li/>').addClass('czz_goods_li');

			$a.appendTo($li);
			$p.appendTo($li);
			$p1.appendTo($li);
			$span.appendTo($li);
			$love.appendTo($li);
			$car.appendTo($li);
			$li.appendTo($('.goodslist','.list_search_tw'));
		}
	};

	$.ajax({
		type:"get",
		 data:{
	
			qty:48
		 },
		url:"../api/list.php",
		success:function(msg){
			for(var i =1 ; i <= msg ; i++){
				$('<span/>').text(i).appendTo('.page');
			}
		}	
	});

	//初始化商品列表
	$.ajax({
				type:'get',
				url:"../api/goodslist.php",
				data:{
					page:1,
					qty:48
				},
				success:function(msg){


					//$('.goodslist','.list_search_tw').html('');
					// {"id":"193","img":"\/\/static.wbiao.co\/p\/pc\/images\/1\/fix-b.png",
					// "price":"3,120",
					// "sale":"销量7939",
					// "name":"天梭TISSOT-力洛克系列 T006.407.16.053.00机械男表",
					// "shop":"天梭旗舰店"}

					goods = JSON.parse(msg);
					// for(var i = 0 ; i< goods.length; i++){
					// 	var a = (goods[i].id % 50) + 1; 
					// 	var $img = $('<img/>').attr('src','../img/'+ a +'.jpg').addClass('goods_img');
					// 	var $a = $('<a/>').attr('href','goods.html?id=' + goods[i].id);
						
					// 	$img.appendTo($a)

					// 	var $p = $('<p/>').html(goods[i].price).addClass('goods_price');
						
					// 	$('<span/>').html(goods[i].sale).addClass('goods_sale').appendTo($p);
						
					// 	var $p1 =$('<p/>').html(goods[i].name).addClass('goods_name');
						
					// 	var $span = $('<p/>').html(goods[i].shop).addClass('goods_shop');

					// 	var $love = $('<a/>').addClass('love').html('加入收藏');

					// 	var $car = $('<a/>').addClass('car').html('加入购物车');
						
					// 	var $li = $('<li/>').addClass('czz_goods_li');

					// 	$a.appendTo($li);
					// 	$p.appendTo($li);
					// 	$p1.appendTo($li);
					// 	$span.appendTo($li);
					// 	$love.appendTo($li);
					// 	$car.appendTo($li);
					// 	$li.appendTo($('.goodslist','.list_search_tw'));
					// }
					goodinto(goods);
				}
			})

	//点击分页发送ajax请求
	$(".page").on('click','span',function(e){
		
		if(e.target.tagName=='SPAN'){
			var page = $(e.target).html();
			$.ajax({
				type:'get',
				url:"../api/goodslist.php",
				data:{
					page:page,
					qty:48
				},
				success:function(msg){

					//$('.goodslist','.list_search_tw').html('');
					// {"id":"193","img":"\/\/static.wbiao.co\/p\/pc\/images\/1\/fix-b.png",
					// "price":"3,120",
					// "sale":"销量7939",
					// "name":"天梭TISSOT-力洛克系列 T006.407.16.053.00机械男表",
					// "shop":"天梭旗舰店"}

					goods = JSON.parse(msg);
					// for(var i = 0 ; i< goods.length; i++){
					// 	var a = (goods[i].id % 50 ) + 1; 
					// 	var $img = $('<img/>').attr('src','../img/'+ a +'.jpg').addClass('goods_img');
					// 	var $a = $('<a/>').attr('href','goods.html?id=' + goods[i].id);
						
					// 	$img.appendTo($a)
						
					// 	var $p = $('<p/>').html(goods[i].price).addClass('goods_price');
						
					// 	$('<span/>').html(goods[i].sale).addClass('goods_sale').appendTo($p);
						
					// 	var $p1 =$('<p/>').html(goods[i].name).addClass('goods_name');
						
					// 	var $span = $('<p/>').html(goods[i].shop).addClass('goods_shop');

					// 	var $love = $('<a/>').addClass('love').html('加入收藏');

					// 	var $car = $('<a/>').addClass('car').html('加入购物车');

					// 	var $li = $('<li/>').addClass('czz_goods_li');

					// 	$a.appendTo($li);
					// 	$p.appendTo($li);
					// 	$p1.appendTo($li);
					// 	$span.appendTo($li);
					// 	$love.appendTo($li);
					// 	$car.appendTo($li);
					// 	$li.appendTo($('.goodslist','.list_search_tw'));
					// }
					goodinto(goods);
				}
			})
		}
	});



	//排序
	var open = true;

	$('span','.search_header').eq(2).on('click',function(){
			//goods.reverse();
			$('span','.search_header').css({
				   'color': '#A2A2A2',
				   'border-bottom':'none'
			});
			$(this).css({
				'color':'#cc5252',
				'border-bottom': '3px solid #cc5252'
			});
			goods.sort(function(a,b){
				a = a.price.replace(',','');
				b = b.price.replace(',','');
				return a-b;
				
			});
			if(open){
				goodinto(goods);
				
			}else{
				goodinto(goods.reverse());
			}

			open = !open;
	});

	var open1 = true;
	$('span','.search_header').eq(1).on('click',function(){
			// goods.reverse();
			$('span','.search_header').css({
				   'color': '#A2A2A2',
				   'border-bottom':'none'
			});
			$(this).css({
				'color':'#cc5252',
				'border-bottom': '3px solid #cc5252'
			});
			goods.sort(function(a,b){
				a = a.sale.replace('销量','');
				b = b.sale.replace('销量','');
				return a-b;
				
			});
			if(open1){
				goodinto(goods);
				
			}else{
				goodinto(goods.reverse());
			}

			open1 = !open1;
	});









})