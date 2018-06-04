var index_banner = document.getElementById('banner');
var ban_img = banner.getElementsByTagName('img');



var index_p = document.createElement('p');
index_p.className = 'index_p';
for(let i = 0 ; i < ban_img.length ; i++){
	var index_span = document.createElement('span');
	// index_span.style.alt = ban_img[i].style.src;
	index_span.setAttribute('alt',ban_img[i].alt);
	index_span.innerText = i + 1;
	index_p.appendChild(index_span);
	
}
index_banner.appendChild(index_p);


var index_p = document.getElementsByClassName('index_p')[0];
var index_p_span = index_p.children;

for(let i = 0 ; i < ban_img.length ; i++ ){
	ban_img[i].className = 'zindex0';
}
ban_img[0].className = 'zindex1';
index_p_span[0].className = 'bgc_index1';


var index = 0;

var timer = setInterval(function(){
	++index;
	auto();
},2000);

index_banner.onmouseover = function(){
	clearInterval(timer);
}
index_banner.onmouseout = function(){
	timer = setInterval(function(){
	++index;
	auto();
},2000);
}

function auto(){
	
	for(let i = 0 ; i < ban_img.length ; i++ ){
		ban_img[i].className = 'zindex0';
	}
	if(index >= ban_img.length){
		index = 0;
	}
	ban_img[index].className = 'zindex1';
	for(let i = 0; i < index_p_span.length ; i++){
		index_p_span[i].className = 'bgc_index0';
	}
	index_p_span[index].className = 'bgc_index1';

}

var btn_left = document.getElementsByClassName('ban_left')[0];
var btn_right = document.getElementsByClassName('ban_right')[0];

btn_left.onclick = function(){
	--index;
	auto();
	if(index < 1){
		index = ban_img.length;
	}
}

btn_right.onclick = function(){
	++index;
	auto();

}

index_p.onclick = function(e){
	var target = e.target;
	if(target.tagName = 'SPAN'){
		index = target.getAttribute('alt');
		console.log(index);
		auto();
	}
}