// JavaScript Document


// json {width:100,height:300}
function sportFrame(obj,json,fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function() {
		
		var Stop=true;
		
		for(var name in json)
		{
			
			var val=0;
			
			if(name=='opacity')
			{
				val=Math.round(parseFloat(sgStyle(obj,name))*100);
			}
			else
			{
				val=parseInt(sgStyle(obj,name));	
			}
			
			
			var speed=(json[name]-val)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			
			if(val!=json[name])
			{
				Stop=false;	
			}
		
				if(name=='opacity')
				{
					obj.style.filter='alpha(opacity:'+(val+speed)+')';
					obj.style.opacity=(val+speed)/100;
				}
				else
				{
					sgStyle(obj,name,val+speed+'px');
				}
			
		}
		
			if(Stop)
			{
				clearInterval(obj.timer);
				if(fn)fn();
					
			}
		
		},30);	
}


function sgStyle(obj,prop,value)
{
	if(arguments.length==2)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[prop];	
		}
		else
		{
			return getComputedStyle(obj,false)[prop];	
		}	
	}
	else
	{
		if(arguments.length==3)
		{
			obj.style[prop]=value;
			//obj.setAttribute(prop,value);	
		}	
	}
		
}