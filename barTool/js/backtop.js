define(['jquery','scrollto'],function($,scrollto){
	function BackTop(el,opts){
		this.opts=$.extend({},BackTop.DEFAULTS,opts);
		this.$el=$(el);
		this.scroll=new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		})

		this.$el.on('click',$.proxy(this._move, this));
		$(window).on('scroll',$.proxy(this._checkPosition,this));

	}

	BackTop.DEFAULTS ={
		mode:'move',
		pos:$(window).height()
	};
	BackTop.prototype._move = function(){
		this.scroll.move();
	}
	BackTop.prototype._checkPosition = function(){
		var $el=this.$el;
		if($(window).scrollTop()>this.opts.pos){
			this.$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	}
	return{
		BackTop: BackTop
	}
});