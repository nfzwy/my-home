/*
* @Author: Administrator
* @Date:   2018-04-11 19:11:53
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-13 18:55:46
*/
// 计时器
var mytime =setInterval(function(){
			getTime();
		},1000);
		function getTime(){
			var d = new Date();
			var t = d.toLocaleTimeString();//转换成字符串
			document.getElementById("time").innerHTML= t;
}
