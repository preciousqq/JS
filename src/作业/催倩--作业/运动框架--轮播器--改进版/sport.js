// JavaScript Document

function cssStyle(obj,prop,value)
{
	
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
	obj.timer=setInterval(function(){
			if(prop=="opacity")
			{
				value=Math.round((cssStyle(obj,prop))*100);
				
			}
			else
			{
				value=cssStyle(obj,prop);
				document.title=value;
			}
			speed=(end-value)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(end==value)
			{
				clearInterval(obj.timer);
			}
			else
			{
				if(prop=="opacity")
				{
					obj.style.filter="alpha(opacity:"+(value+speed)+")";
					obj.style.opacity=(value+speed)/100;
				}
				else
				{
					cssStyle(obj,prop,cssStyle(obj,prop)+speed);
				}
			}
			
		},30);



}