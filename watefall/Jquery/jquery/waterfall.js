$(window).on('load',function(){
	waterfall();
	var dataInt={"data":[{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
	$(window).on('scroll',function(){
		if(checkScrollSlide){
			$.each(dataInt.data,function(key,value){
				// console.log(key);
				// console.log($(value).attr('src'));
				var oBox =$('<div>').addClass('box').appendTo($('#main'));
				var oPic=$('<div>').addClass('pic').appendTo($(oBox));
				var oImg=$('<img>').attr('src','images/'+$(value).attr('src'));
				oImg.appendTo($(oPic));

			})
			waterfall();
		}
	})
})
function waterfall(){
	var oboxs=$('#main>div');
	var w=oboxs.eq(0).outerWidth();
	var cols=Math.floor($(window).width()/w);
	$('#main').width(w*cols).css('margin','0 auto');
	 // console.log(w);
	var hArr=[];
	oboxs.each(function(index,value){
		// console.log(index);
		// console.log(value);
		var h=oboxs.eq(index).outerHeight();//获取第一行的图片的高度
		if(index<cols){
			hArr[index]=h;//把前cols列的高度放在hArr数组中
		}else{
			var minH=Math.min.apply(null,hArr);
			var minHIndex=$.inArray(minH,hArr);//求出minH在hArr中的索引值
			// 把value的dom对象转换成jquery对象
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=oboxs.eq(index).outerHeight();
		}
	})
}
function checkScrollSlide(){
	var lastBox=$('#main>div').last();
	var lastBoxDis=lastBox.offset().top+Math.floor(lastBox.outerHeight()/2);
	var scollTop=$(window).scrollTop;
	var documentH=$(window).height;
	return (lastBoxDis<scrollTop+documentH)?true:false;

}