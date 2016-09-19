// JavaScript Document
//表示获取当前下拉框中的年，月，日
function checkYear(){
	  var yselect=document.getElementById("year");
	  var yindex=yselect.selectedIndex;
	  var year=yselect.options[yindex].text;
	  return year;
}
function checkMonth(){
	  var mselect=document.getElementById("month");
	  var mindex=mselect.selectedIndex;
	  var month=mselect.options[mindex].text;	
	  return month;
}

//得到该月有多少天
function getMonthDays(year,month){
			var feb=false;
			if(year%400==0||(year%4==0&&(year%100)!=0))
				feb=true;
			if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
				return 31;
			if(month==4||month==6||month==9||month==11)
				return 30;
			if(month==2)
				return (feb==true) ? 29:28;
}
//获取某月有多少天，在日的下拉框中显示
function checkDay(days)
{
	var now=new Date();
	var tday=now.getDate();
	var day=document.getElementById("day");
	var children=day.childNodes;
	for(var i=children.length-1;i>=0;i--)
	{
		day.removeChild(children[i]);
	}
	for(var j=0;j<days;j++)
	{
		var op=document.createElement("option");
		var txt=document.createTextNode(j+1);
		op.appendChild(txt);
		if(tday==op.innerHTML)
		
			op.setAttribute("selected","selected");
		day.appendChild(op);
	}
}
//节气数据
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至");
//返回某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date((31556925974.7*(y-1900)+sTermInfo[n]*60000)+Date.UTC(1900,0,6,2,5));
   return(offDate.getUTCDate())
}
//遍历日期将日期存入表格中，并且将农历节气加入
function selectDate(days,firstweek,tmp1,tmp2,month){
		var tbody=document.getElementById("tbody");
		var Day=tbody.getElementsByTagName("td");
		for(var i=0;i<41;i++)
		{
			Day[i].innerHTML="";
		}
		for(var i=firstweek,j=0;i<Day.length&&j<days;i++,j++)
		{	
					Day[i].innerHTML=j+1;
					if(j+1==tmp1)
						{
							
							var date=document.createElement("div");
							var txt=document.createTextNode(solarTerm[(month-1)*2]);
							date.appendChild(txt);
							date.style.fontSize="5px";
							date.style.color="#66F";
							Day[i].appendChild(date);
							
						}
						 if(j+1==tmp2)
						{
							
							var solar=document.createElement("div");
							var txt=document.createTextNode(solarTerm[(month-1)*2+1]);
							solar.appendChild(txt);
							solar.style.fontSize="5px";
							solar.style.color="#66F";
							Day[i].appendChild(solar);
							
						}
						
		}	
	
}
function selectFestival(month,days,firstweek){
var json=[{"1":"元旦"},{"14":"情人节"},{"8":"妇女节","12":"植树节","15":"消费者权益日"},{"1":"愚人节"},
     {"1":"劳动节","4":"青年节","12":"护士节"},{"1":"儿童节"},{"1":"建党节"},{"1":"建军节"},
	 {"10":"教师节","28":"孔子诞辰"},{"1":"国庆节","6":"老人节","24":"联合国日"},{"17":"国际大学生节"},
	 {"24":"平安夜","25":"圣诞节"}];
	 var tbody=document.getElementById("tbody");
	 var Day=tbody.getElementsByTagName("td");
	 for(var i=0,l=json.length;i<l;i++){
		if(month==(i+1)){
			  for(var j=firstweek,k=0;j<Day.length&&k<days;j++,k++){
				  for(var key in json[i]){
						if(key==(k+1)){
								var date=document.createElement("div");
								var txt=document.createTextNode(json[i][key]);
								date.appendChild(txt);
								date.style.fontSize="5px";
								date.style.color="#66F";
								Day[j].appendChild(date);	
						  }
						 
				  }
			  }
					
		}
	}
}
//触碰某个日期，让某个日期背景色有变化
function touchDate(){
	var tbody=document.getElementById("tbody");
	var Day=tbody.getElementsByTagName("td");
	var flag = null;
	for(var j=0;i<Day.length;j++)
	{
				
		Day[j].style.background="#FFF";
	}
	for(var i=0;i<Day.length;i++)
	{
		Day[i].onmouseover=function(){
				this.style.background="#a1aee0";
			}
		Day[i].onmouseout=function(){
				this.style.background="#fff";
			}
		
		
	 }
	
	
	
}
//获取当前时间，一进系统就显示当前时间
function nowTime()
{
	var now=new Date();
	var tyear=now.getFullYear();
	var tmonth=now.getMonth()+1;
	var tday=now.getDate();
	var year=document.getElementById("year");
	var opy=year.getElementsByTagName("option");
	for(var i=0;i<opy.length;i++)
	{
		if(tyear==opy[i].innerHTML)
			opy[i].setAttribute("selected","selected");
	}
	var month=document.getElementById("month");
	var opm=month.getElementsByTagName("option");
	for(var j=0;j<opm.length;j++)
	{
		if(tmonth==opm[j].innerHTML)
			opm[j].setAttribute("selected","selected");
	}
	
}
//判断某年的生肖
function isAnimals(year){
		var animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
		var index=(year-1900)%12;
		var animal=document.getElementById("animals");
		animal.innerHTML=animals[index];
}
//点击回到今日回到当前时间
function clickToday(days){
		var today=document.getElementById("today");
		today.onclick=function(){
				var now=new Date();
				var tyear=now.getFullYear();
				isAnimals(tyear);
				nowTime();
		        checkDay(days);	
				check();
		//为了解决chrome浏览器问题，采用了刷新，强制回到初始页面
				document.location.reload();
			}
}
//给所有格子加背景色
/*function addColor(){
	var tbody=document.getElementById("tbody");
		var Day=tbody.getElementsByTagName("td");
		for(var i=0;i<42;i++)
		{
			Day[i].style.background="#e6edf7";
		}	
}*/

//将基本功能在check()函数里调用，再一次进行封装
function check(){
		  //获取到选中的年月
		  var year=checkYear();
		  var month=checkMonth();
		  //获取该年该月的天数
		   var days=getMonthDays(year,month);
		   //在下拉框中显示一个月有多少天
		   checkDay(days);
		  //获取该月一号是周几
		  var thisday=new Date(year+","+month+","+"1");
		  var firstweek=thisday.getDay();
		  //遍历公历日期和节气存入日历中
		  //计算24节气tmp1:代表某个月个月第一个节气的日期，tmp2:代表某个月第二个节气的日期
		  tmp1=sTerm(year,(month-1)*2);
		  tmp2=sTerm(year,(month-1)*2+1);
		  selectDate(days,firstweek,tmp1,tmp2,month);
		  //console.log(month+":"+tmp1+"是"+solarTerm[(month-1)*2]);
		  //console.log(month+":"+tmp2+"是"+solarTerm[(month-1)*2+1]);
		 //查询每个月的国际节假日
		 selectFestival(month,days,firstweek);
		 //判断某年是哪个生肖
		 isAnimals(year);
		 //点击回到今天回到当前时间
		 clickToday(days);
		 //给所有格子加颜色
		 //addColor();

}
window.onload=function(){
		
		nowTime()
		check();
		touchDate();
	}