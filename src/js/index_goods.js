define(['jquery'],function($){
	return $.ajax({
		type:"get",
		url:"../api/index_goods.php",
		success:function(data){
				//console.log(data);
				var a = JSON.parse(data);
				//console.log(a)
				var czz_arr = []; 
				var czz_arr2=[];
				var czz_arr4=[];
				var czz_arr5 =[];
				var czz_arr8 = [];
				var czz_arr9 = [];
				$(a).each(function(){
					//console.log(this);
					if(this.type === "one"){
						czz_arr.push(this);
					}
					if(this.type === "two"){
						czz_arr2.push(this);
					}
					if(this.type === "four"){
						czz_arr4.push(this);
					}
					if(this.type === "five"){
						czz_arr5.push(this);
					}
					if(this.type === "eight"){
						czz_arr8.push(this);
					}
					if(this.type === "nine"){
						czz_arr9.push(this);
					}
					
				})
				
				// var $ul = $('<ul/>');
				// for(var i = 0; i < czz_arr.length; i++){
				// 	var $li = $('<li/>');
				// 	var $img = $('<img/>');
				// 	$img.attr('src',czz_arr[i].img);
				// 	$img.appendTo($li);
				// 	$li.appendTo($ul);
				// 	//console.log(czz_arr[i].img)
				// }
				//console.log($ul);
				// $ul.appendTo($('.container','#czz_content_on'))
				
				function czzauto(arr,dom,cla1,cla2){
					var $ul = $('<ul/>');
					for(let i = 0; i < arr.length; i++){
							var text = arr[i].text;
						if(arr[i].text===""){
							text=["",""];
						}else{
							var text = text.split('?');
						}
						//console.log(text);
						var $li = $('<li/>');
						var $img = $('<img/>');
						var $p =$('<p/>').addClass(cla1);
						var $pp = $('<p/>').addClass(cla2);
						var $a = $('<a href="#" />')
						$p.html(text[0] );
						$pp.html(text[1]);
						$img.attr('src',arr[i].img);
						$img.appendTo($a);
						$p.appendTo($a);
						$pp.appendTo($a);
						$a.appendTo($li);
						$li.appendTo($ul);
					//console.log(czz_arr[i].img)
				}
				//console.log($ul);
				$ul.appendTo($('.container',dom));
			}
				czzauto(czz_arr,'#czz_content_on');
				czzauto(czz_arr2,'#czz_content_tw',"p0","pp1");
				czzauto(czz_arr4,'#czz_content_fo',"p4","pp4");
				czzauto(czz_arr5,'#czz_content_fi',"p4");
				czzauto(czz_arr8,'#czz_content_ei',"p8","pp8");
				czzauto(czz_arr9,'#czz_content_ni',"p9");



		}


	})
})