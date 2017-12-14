requirejs.config({
	paths:{
		jquery:'jquery-3.2.1.min'
	}
});
	/*requirejs(['jquery','scrollto'],function($,scrollto){
	var scroll=new scrollto.ScrollTo({
		dest:0,
		speed:500
	});
$('#backTop').on('click',move);
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});

	checkPosition($(window).height())
	function move(){
		$('html, body').animate({
		scrollTop:0	
		},500);
	}

	function checkPosition(pos){
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();

		}else{
			$('#backTop').fadeOut();
		}
	}
	$('#backTop').on('click', $.proxy(scroll.move,scroll));*/
	requirejs(['jquery','backtop'],function($,backtop){
		new backtop.BackTop($('#backTop'),{
			mode:'move'
		});
	});