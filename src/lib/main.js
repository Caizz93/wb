requirejs.config({
	//baseUrl:"js",
	paths:{
		"jquery":"jquery-3.3.1",
		"czz_extend":"../js/ajax",
		"index_goods":"../js/index_goods",
		"enter":"../js/enter"
	}
})
require(["jquery","czz_extend","index_goods","enter"],function($,czz_extend,index_goods,enter){
		//console.log($)
			$("xheader").czzheader();
			$("xfooter").czzfooter();
	})



