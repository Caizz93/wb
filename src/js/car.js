;jQuery(function($){
	//发送ajax请求购物车数据

	//得到存在cookie里的客户信息

	var cookies = document.cookie;	
	cookies = cookies.split('; ');
	var phone;
	cookies.forEach(function(item){
		item = item.split('=');
		if(item[0] == 'wbuser'){
			phone = item[1];
		}
	});
	$.ajax({
		type:'get',
		data:{
			phone:phone
		},
		url:'../api/car.php',

		success:function(msg){
/*			
{id: "196", img: "../img/47.jpg", shop: "德国莫勒官方旗舰店", name: "【德式机械-帆船白 爆款袭来！】来自德国格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-2", price: "8,640", …}
id
"196"
img
"../img/47.jpg"
name
"【德式机械-帆船白 爆款袭来！】来自德国格拉苏蒂·莫勒Muehle·Glashuette-Sporty  运动系列 M1-2"
price
"8,640"
qty
"4"
shop
"德国莫勒官方旗舰店"

*/			var msg = JSON.parse(msg);  
			$(msg).each(function(){
				//console.log(this);
				var a = $(` <p class = "car_shop"><input type="checkbox"/><span>${this.shop}</span></p>`);
				var c = this.price.replace(",","");
				var b = $(`<ul class="title_car">
					<li><input type="checkbox"/></li>
					<li><img src="${this.img}" alt="${this.id}" /></li>
					<li>${this.name}</li>
					<li class="single_price" data-single = "${c}">￥${this.price}</li>
					<li class="car_qty"><span class="jian">-</span><span class="res">${this.qty}</span><span class="jia">+</span></li>
					<li class="qty_price">￥${c * this.qty}</li>
					<li><span class="del_car">删除</span></li>
					</ul>`);
				var div = $(`<div class=car_"${this.id}"></div>`)
				a.appendTo(div);
				b.appendTo(div);
				div.appendTo('.msg_car');
			});

			
			
			$('.title_car').on('click',function(e){
				var c = $('.single_price',this).attr('data-single');
				//qty增减功能
				var qty = $('.res',this).html();
				//console.log(qty)
				var target = $(e.target);
				//	console.log(target)
				
				if(target.hasClass('jia')  ){
					++qty;
					qty = qty <= 1 ? qty = 1 : qty = qty;
					$('.qty_price',this).html('￥'+ c * qty);
				}
				if(target.hasClass('jian')  ){
					--qty;
					qty = qty <= 1 ? qty = 1 : qty = qty;
					$('.qty_price',this).html('￥'+ c * qty);
				}
				// if(qty<=1){
				// 	qty=0;
				// }
				$('.res',this).html(qty);

				//删除功能
				var $del_id = $('img',this).attr('alt');
				if(target.hasClass('del_car')){
					
					$.ajax({
						type:'get',
						data:{
							id:$del_id,
							phone:phone
						},
						url:'../api/delete_car.php'
					});


					$(this).parent().remove();

				}
			});

		
			$.ajax({
				type:'get',
				data:{
					phone:phone
				},
				url:'../api/shuliang.php',
				success:function(shul){
					$('.h4_qty').html(shul);
				}
			});


		}//ajax：success尾巴



	});//ajax尾巴


});