jQuery.fn.extend({
	czzheader:function(){
		return this.each(function(){
			// $.ajax({
			// 	type:"get",
			// 	url:"../css/common.css",
			// 	success:function(data){
			// 		$("head style").append(data);
			// 	}.bind(this)
			// });


			$.ajax({
				type:"get",
				url:"../html/common_header_other.html",
				success:function(data){
					$(this).html(data);
					$.ajax({
						type: "GET",
						url: "../js/index.js",
						dataType: "script"
					});
				}.bind(this)
			})
		})

	},

	czzfooter:function(){
		return this.each(function(){
			// $.ajax({
			// 	type:"get",
			// 	url:"../css/common.css",
			// 	success:function(data){
			// 		$("head style").append(data)
			// 	}.bind(this)
			// })


			$.ajax({
				type:"get",
				url:"../html/common_footer.html",
				success:function(data){
					$(this).html(data);
					$.ajax({
							type: "GET",
							url: "../js/index.js",
							dataType: "script"
						});
				}.bind(this)
			})
		})
	}
})

	$("xheader").czzheader();
	$("xfooter").czzfooter();