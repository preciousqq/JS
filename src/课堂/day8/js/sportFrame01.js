// JavaScript Document

//获取非行间样式的函数
function cssStyle(obj,prop,value)
{
	if(arguments.length==2)      //样式的获取
	{
		if(obj.currentStyle)  //浏览器的兼容性处理
		{
			return  parseFloat(obj.currentStyle[prop]); //IE
		}
		else
		{
			return  parseFloat(getComputedStyle(obj,false)[prop]);	// FF chrome 其他浏览器
		}	
	}
	else if(arguments.length==3)
	{
		 obj.style[prop]=value+'px';	 //样式的设置
	}
	else
	{
		
	}
	
}

//运动函数

function sport(obj,prop,end,fn)
{
	clearInterval(obj.timer);
	
	
	obj.timer=setInterval(function(){
	   var speed=0;
	   var val=0;
	   if(prop=='opacity')
	   {
			val=Math.round(cssStyle(obj,prop)*100);   
	   }
	   else
	   {
			val=cssStyle(obj,prop); 
	   }
		
	   speed=(end-val)/10;
	   speed=speed>0?Math.ceil(speed):Math.floor(speed);
	   
	   if(end==val)
	   {
			clearInterval(obj.timer); 
			if(fn) 
			{
				fn();	
			}  
	   }
	   else
	   {
			if(prop=="opacity")
			{
				obj.style.filter='alpha(opacity:'+(val+speed)+')';	 //IE
				obj.style.opacity=(val+speed)/100;				     
				// chrome  FF 其他浏览器
			}
			else
			{
				cssStyle(obj,prop,cssStyle(obj,prop)+speed);
			} 
			 
	   }
		
	},30);	
}












