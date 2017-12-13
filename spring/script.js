window.onload =function(){
	    var page1 = document.getElementById("page1");
	    var page2 = document.getElementById("page2");
	    var page3 = document.getElementById("page3");
		var music = document.getElementById('music');
		var lantern = document.getElementById("p1_lantern");
		var audio = document.getElementsByTagName('audio')[0];
		//当音乐播放完停止时候，自动停止光盘旋转效果
		audio.addEventListener("ended", function(event){
			music.setAttribute("class", "");
			//存在兼容问题
			//music.style.animationPlayState= "paused";
			//music.style.webkitAnimationPlayState = "paused";
		},false);
		//点击音乐图标，控制音乐播放效果
		// music.onclick = function(){
		// 	if(audio.paused){
		// 		audio.play();
		// 		//第一种方法
		// 		// this.setAttribute("class" , "play"); 此方法停止时会立刻停止循环
		// 		//第二种发放，会存在兼容的问题，4.4以下的安卓不兼容，iPhone6以下不兼容
		// 		this.style.animationPlayState = "running";
		// 		this.style.webkitAnimationPlayState = "running";
		// 	}else{
		// 	audio.pause();
		// 	// this.setAttribute("class" , "");
		// 	this.style.animationPlayState = "paused";
		// 	this.style.webkitAnimationPlayState = "paused";
		// 	};
		music.addEventListener("touchstart", function(event){
			if (audio.paused) {
				audio.play();
				this.setAttribute("class", "play");
			}else{
				audio.pause();
				this.setAttribute("class", "");
			};
		},false);
/*		 page1.addEventListener("touchstart",function(event){
		 	page1.style.display = "none";
		 	page2.setAttribute("class", "page");
		 	page2.style.display = "block";



		 	setTimeout(function(){
		 	page3.style.display = "block";
			page3.style.top     = "100%";
			page2.setAttribute("class", "page fadeOut");
		 		page3.setAttribute("class", "page fadeIn")

		 	},5500);
		 },false);
*/

    // 点击屏幕，开启好运2016
    lantern.addEventListener("click", function() {
        page1.style.display = "none";
        page2.setAttribute("class", "page");
        page2.style.display = "block";

        setTimeout(function() {
            page3.style.display = "block";
            page3.style.top = "100%";
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    }, false);
    
    //手指滑动切换页面--第一页
    page1.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page1.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page1.style.display = "none";
                page2.setAttribute("class", "page");
                page2.style.display = "block";

            } else { //上一页
                page1.style.display = "none";

                page3.style.display = "block";
                // blessing.style.opacity = 1;
            }
        }
    }, false)

    //手指滑动切换页面--第二页
    page2.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page2.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page2.style.display = "none";
                page3.style.display = "block";
            } else { //上一页
                page1.style.display = "block";
                page2.style.display = "none";
            }
        }
    }, false)

    //手指滑动切换页面--第三页
    page3.addEventListener("touchstart", function(e) {
        start_y = e.touches[0].clientY;
    }, false)
    page3.addEventListener("touchend", function(e) {
        end_y = e.changedTouches[0].clientY;
        var delta_y = end_y - start_y;
        if (Math.abs(delta_y) < 0.2 * window.innerHeight) {
            return;
        } else {
            if (delta_y < 0) { //下一页
                page1.style.display = "block";
                page3.style.display = "none";
            } else { //上一页
                page2.setAttribute("class", "page");
                page2.style.display = "block";
                page3.style.display = "none";
            }
        }
    }, false)
    


		}
