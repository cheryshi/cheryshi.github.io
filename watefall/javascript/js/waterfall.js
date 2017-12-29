window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'30.jpg'},{"src":'31.jpg'},{"src":'32.jpg'},{"src":'33.jpg'},{"src":'34.jpg'}]};
	window.onscroll=function(){
		 if(checkScrollSlide()){
		 		var oParent=document.getElementById('main');
		 		// 将数据块渲染到当前页面的尾部
		 		for(var i=0;i<dataInt.data.length;i++){
		 			var oBox=document.createElement('div');
		 			oBox.className='box';
		 			oParent.appendChild(oBox);
		 			var oPic=document.createElement('div');
		 			oPic.className="pic";
		 			oBox.appendChild(oPic);
		 			var oImg=document.createElement('img');
		 			oImg.src="images/"+dataInt.data[i].src;
		 			oPic.appendChild(oImg);

		 		}
		 			waterfall('main','box');
		 	}
		// checkScrollSlide();
		}
	}
	function waterfall(parent,box){
		//将main下的所有class为box的元素取出来
		var oParent=document.getElementById(parent);
		var oBoxs=getByClass(oParent,box);
		// console.log(oBoxs.length);
		//计算整个页面显示的列数（页面宽度/box的宽度)x.offsetWidth获取一个div的宽度，document.documentElement.clientWidth获取页面的宽度
		var oBoxW=oBoxs[0].offsetWidth;
		var cols= Math.floor(document.documentElement.clientWidth/oBoxW);
		// console.log(cols);
		//设置main的宽度
		oParent.style.cssText='width:'+oBoxW*cols+'px;margin:auto';
		var hArr=[]; //存放每一行图片高度的数组
		for (var i=0;i<oBoxs.length;i++){
			if(i<cols){
				hArr.push(oBoxs[i].offsetHeight);
			}else{
				var minH=Math.min.apply(null,hArr);
				var minindex=getMinhIndex(hArr,minH);
				oBoxs[i].style.position='absolute';
				oBoxs[i].style.top=minH+'px';
				//获取盒子的left值
				oBoxs[i].style.left=oBoxs[minindex].offsetLeft+'px';
				// oBoxs[i].style.left=oBoxW*minindex+'px';
				hArr[minindex]+=oBoxs[i].offsetHeight;
			}
		}
		// console.log(hArr);
	}
	//根据class获取元素
	function getByClass(parent,clsName){
		var boxArr=new Array(),//用来存储class为box的所有元素
		oElements=parent.getElementsByTagName('*');
		for(var i=0;i<oElements.length;i++){
			if (oElements[i].className==clsName) {
				boxArr.push(oElements[i]);
			}
		}

	return boxArr;
}
//获取高度为最小值在数组中的索引
function getMinhIndex(arr,val){
	for (var i in arr) {
		if (arr[i]==val) {
			return i;
		}
	}
}

//检测是否具备了滚动条加载数据库的条件
function checkScrollSlide() {
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	// console.log(scrollTop);
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	return (lastBoxH<scrollTop+height)?true:false;
}