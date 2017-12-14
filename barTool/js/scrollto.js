define(['jquery'],function($){
	function ScrollTo(opts){
		 this.opts=$.extend({},ScrollTo.DEFAULTS,opts);
	}
	ScrollTo.prototype.move=function(){
		var opts=this.opts;
		var dest=opts.dest

		if($(window).scrollTop() != dest){
			if(!$('html,body').is(':animated')){
					$('html,body').animate({
					scrollTop: dest
				},opts.speed);	
			}
		}
	};
	ScrollTo.DEFAULTS = {
		dest:0,
		speed:800
	};
	return{
		ScrollTo:ScrollTo
	};
});