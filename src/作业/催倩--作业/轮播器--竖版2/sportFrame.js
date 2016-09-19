// JavaScript Document
//arguments是一个数组，必须要判断传过来的是几个参数，用数组中的length方法
function cssStyle(obj,prop,value){
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		{
			return parseFloat(obj.currentStyle[prop]);
		}
		else
		{
			return parseFloat(getComputedStyle(obj,false)[prop]);
		}
	}
	else
	{
		obj.style[prop]=value+"px";
	}
}

function sport(obj,prop,end)
{
	clearInterval(obj.timer);
	var speed=0;
	var value=0;
	obj.timer=setInterval(
	function(){
		if(prop=="opacity")
		{
			value=Math.round(cssStyle(obj,prop)*100);
		}
		else
		{
			value=cssStyle(obj,prop);
		}
		speed=(end-value)/7;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(value==end)
		{
			clearInterval(obj.timer);
		}
		else{
			if(prop=="opacity")
			{
				obj.style.filter="alpha(opacity:"+(value+speed)+")";
				obj.style.opacity=(value+speed)/100;
			}
			else
			{
				cssStyle(obj,prop,(cssStyle(obj,prop)+speed));
			}
		}
	
	},30);
	
}
