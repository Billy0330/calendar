//定义农历闰大小信息表，包含1900-2100
var lunarInfo=new Array(
        0x4bd8, 0x4ae0, 0xa570, 0x54d5, 0xd260, 0xd950, 0x5554, 0x56af, 0x9ad0, 0x55d2,
        0x4ae0, 0xa5b6, 0xa4d0, 0xd250, 0xd255, 0xb54f, 0xd6a0, 0xada2, 0x95b0, 0x4977,
        0x497f, 0xa4b0, 0xb4b5, 0x6a50, 0x6d40, 0xab54, 0x2b6f, 0x9570, 0x52f2, 0x4970,
        0x6566, 0xd4a0, 0xea50, 0x6a95, 0x5adf, 0x2b60, 0x86e3, 0x92ef, 0xc8d7, 0xc95f,
        0xd4a0, 0xd8a6, 0xb55f, 0x56a0, 0xa5b4, 0x25df, 0x92d0, 0xd2b2, 0xa950, 0xb557,
        0x6ca0, 0xb550, 0x5355, 0x4daf, 0xa5b0, 0x4573, 0x52bf, 0xa9a8, 0xe950, 0x6aa0,
        0xaea6, 0xab50, 0x4b60, 0xaae4, 0xa570, 0x5260, 0xf263, 0xd950, 0x5b57, 0x56a0,
        0x96d0, 0x4dd5, 0x4ad0, 0xa4d0, 0xd4d4, 0xd250, 0xd558, 0xb540, 0xb6a0, 0x95a6,
        0x95bf, 0x49b0, 0xa974, 0xa4b0, 0xb27a, 0x6a50, 0x6d40, 0xaf46, 0xab60, 0x9570,
        0x4af5, 0x4970, 0x64b0, 0x74a3, 0xea50, 0x6b58, 0x5ac0, 0xab60, 0x96d5, 0x92e0,
        0xc960, 0xd954, 0xd4a0, 0xda50, 0x7552, 0x56a0, 0xabb7, 0x25d0, 0x92d0, 0xcab5,
        0xa950, 0xb4a0, 0xbaa4, 0xad50, 0x55d9, 0x4ba0, 0xa5b0, 0x5176, 0x52bf, 0xa930,
        0x7954, 0x6aa0, 0xad50, 0x5b52, 0x4b60, 0xa6e6, 0xa4e0, 0xd260, 0xea65, 0xd530,
        0x5aa0, 0x76a3, 0x96d0, 0x4afb, 0x4ad0, 0xa4d0, 0xd0b6, 0xd25f, 0xd520, 0xdd45,
        0xb5a0, 0x56d0, 0x55b2, 0x49b0, 0xa577, 0xa4b0, 0xaa50, 0xb255, 0x6d2f, 0xada0,
        0x4b63, 0x937f, 0x49f8, 0x4970, 0x64b0, 0x68a6, 0xea5f, 0x6b20, 0xa6c4, 0xaaef,
        0x92e0, 0xd2e3, 0xc960, 0xd557, 0xd4a0, 0xda50, 0x5d55, 0x56a0, 0xa6d0, 0x55d4,
        0x52d0, 0xa9b8, 0xa950, 0xb4a0, 0xb6a6, 0xad50, 0x55a0, 0xaba4, 0xa5b0, 0x52b0,
        0xb273, 0x6930, 0x7337, 0x6aa0, 0xad50, 0x4b55, 0x4b6f, 0xa570, 0x54e4, 0xd260,
        0xe968, 0xd520, 0xdaa0, 0x6aa6, 0x56df, 0x4ae0, 0xa9d4, 0xa4d0, 0xd150, 0xf252,
        0xd520);


//月份
var month=new Array("1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月");

//公历中每个月的天数表
var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);

//星期
var weekAry=new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");

//农历日期前缀
var lunarPre=new Array('初','十','廿','卅');

//月份转农历称呼
var monthPre=new Array('正','一','二','三','四','五','六','七','八','九','十','冬','腊')
//天干
var Gan=new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");

//地支
var Zhi=new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");

//24节气
var solarTerm = new Array("小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至")
//24节气，用数组记录下自小寒开始，各节气相对于小寒所经历的分钟数
var sTermInfo = new Array(0,21208,42467,63836,85337,107014,128867,150921,173149,195551,218072,240693,263343,285989,308563,331033,353350,375494,397447,419210,440795,462224,483532,504758);

//生肖
var animals=new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");

//农历节日 *表示放假日
var lunarFest=new Array(
"0101*春节",
"0115 元宵节",
"0505 端午节",
"0707 七夕情人节",
"0715 中元节",
"0815*中秋节",
"0909 重阳节",
"1208 腊八节",
"1224 小年",
"0100*除夕");

//公历节日*表示放假日
var solarFest=new Array(
"0101*元旦",
"0202 世界湿地日",
"0214 西洋情人节",
"0308 国际妇女节",
"0312 植树节",
"0315 消费者权益日",
"0401 愚人节",
"0422 世界地球日",
"0501*国际劳动节",
"0504 五四青年节",
"0601 儿童节",
"0701 建党节",
"0801 建军节",
"0910 教师节",
"1001*国庆节",
"1224 平安夜",
"1225 圣诞节");

//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊函数处理部分＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊//
//获取目前所处的日期
var Today=new Date();
var tYear=Today.getFullYear();
var tMonth=Today.getMonth()+1;
var tDay=Today.getDate();
var tHour=Today.getHours();
var tMinute=Today.getMinutes();
var tSecond=Today.getSeconds();
var tWeek=Today.getDay();

//页面加载通用函数
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

//＊＊＊＊＊＊＊＊＊＊＊＊＊创建顶部控制栏＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊//

//构建年份option标签并创建年份选择列表
function yearSelect(){
	var se=document.getElementById("field-year");
	for(var i=1900;i<2101;i++){
		var op = document.createElement("option");
		op.innerHTML=i.toString();
		if(op.value == tYear)
			op.selected="selected";
		    se.appendChild(op);
	}
}

//构建月份option标签并创建月份选择列表
function monthSelect(){
	var se=document.getElementById("field-month");
	for(var i=1;i<13;i++){
		var op = document.createElement("option");
		op.innerHTML=i.toString();
		if(op.value == tMonth)
			op.selected="selected";
		    se.appendChild(op);
	}
}

//构建节假日li标签并创建节假日列表
function holidaySelect(){
    var se=document.getElementById("field-holiday");
	for(var i=1;i<13;i++){
		var op = document.createElement("option");
		op.innerHTML=i.toString();
		if(op.value == tMonth)
			op.selected="selected";
		    se.appendChild(op);
	}
}

//显示当前时钟
function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// add a zero in front of numbers<10
m=checkTime(m)
s=checkTime(s)  
document.getElementById('timeNow').innerHTML=h+":"+m+":"+s
t=setTimeout('startTime()',1000)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}

//＊＊＊＊＊＊＊＊＊＊＊计算日期所用的函数＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊//

//判断公历年中一个月的天数
function sMonthDays(year,month){  //其中month为实际月份，mId为是几月份减1，需要考虑闰年2月天数不同问题
	if(month>12||month<1)
		return -1;
	var mId=month-1;
	if(mId==1)
		return (year%4==0)&&(year%100!=0)||(year%400==0)?29:28;
	else return solarMonth[mId];
}

//====================================== 返回农历 y年的总天数
function lYearDays(y) {
	var i, sum = 348;
	for(i=0x8000; i>0x8; i>>=1) sum += (lunarInfo[y-1900] & i)? 1: 0;
	return(sum+leapDays(y));
}

//====================================== 返回农历 y年闰月的天数
function leapDays(y) {
    if (leapMonth(y)) return( (lunarInfo[y - 1899] & 0xf) == 0xf ? 30 : 29);
    else return(0);
}

//====================================== 返回农历 y年闰哪个月 1-12 , 没闰返回 0
function leapMonth(y) {
    var lm = lunarInfo[y - 1900] & 0xf;
    return(lm == 0xf ? 0 : lm);
}

//====================================== 返回农历 y年m月的总天数
function monthDays(y,m) {
	return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 );
}

//====================================== 算出农历, 传入日期控件, 返回农历日期控件, 该控件属性有 .year .month .day .isLeap
function Lunar(objDate) {
	var i, leap=0, temp=0;
	var offset   = (Date.UTC(objDate.getFullYear(),objDate.getMonth(),objDate.getDate()) - Date.UTC(1900,0,31))/86400000;
	for(i=1900; i<2100 && offset>0; i++) { 
		temp=lYearDays(i); 
		offset-=temp; 
	}
	if(offset<0) { 
		offset+=temp; 
		i--; 
	}
	this.year = i;
	leap = leapMonth(i); //闰哪个月
	this.isLeap = false;
	for(i=1; i<13 && offset>0; i++) {
	//闰月
		if(leap>0 && i==(leap+1) && this.isLeap==false){ 
			--i; 
			this.isLeap = true; 
			temp = leapDays(this.year); 
		}
		else{ 
			temp = monthDays(this.year, i); 
		}
	//解除闰月
		if(this.isLeap==true && i==(leap+1)) this.isLeap = false;
		offset -= temp;
	}
	if(offset==0 && leap>0 && i==leap+1)
	if(this.isLeap){ 
		this.isLeap = false; 
	}
	else{ 
		this.isLeap = true; 
		--i; 
	}
	if(offset<0){ 
		offset += temp; 
		--i; 
	}
	this.month = i;
	this.day = offset + 1;
}

//判断天干地支前缀
function cyclical(num){
	return (Gan[num%10]+Zhi[num%12]);
}

//计算属相并返回
function animalsYear(year){
	return (animals[(year-4)%12]);
}

//计算某年的第n个节气为第几日
function getTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900) + sTermInfo[n]*60000  ) + Date.UTC(1900,0,6,2,5) )
   return(offDate.getUTCDate());
}

//利用泰勒公式计算给定年月日所处的星期
function getWeek(y,m,d){
	var c=parseInt(y/100);
	var b=y%100;
	var temp=0;
	if(m==0||m==1){
		
			temp=parseInt(parseInt((y-1)/100)/4)-2*parseInt((y-1)/100)+((y-1)%100)+parseInt((y-1)%y/4)+parseInt(13*(m+2)/5)+d-1;
		}
	else{
		temp=parseInt(c/4)-2*c+b+parseInt(b/4)+parseInt(13*(m+2)/5)+d-1;
	}
	temp%=7;
	return(temp);
	}

//＊＊＊＊＊＊＊＊＊＊＊＊利用日期获取所需内容＊＊＊＊＊＊＊＊＊＊＊＊//

//根据农历日判断中文念法
function ChDay(d){
   var s='';
    switch(d){
        case 10:
            s='初十';
            break;
        case 20:
            s='二十';
            break;
        case 30:
            s='三十';
            break;
        default:
            s=lunarPre[Math.floor(d/10)];
            s+=monthPre[d%10];
    }
    return s;
}

//将数字日期转化为字符串
function toStr(m,d){
	var s1="";
	var s2="";
	switch (m){
		case 0:s1="01";
			   break;
		case 1:s1="02";
		       break;
		case 2:s1="03";
		       break;
		case 3:s1="04";
		       break;
		case 4:s1="05";
		       break;
		case 5:s1="06";
		       break;
		case 6:s1="07";
		       break;
		case 7:s1="08";
		       break;
		case 8:s1="09";
		       break;
		default:s1=(m+1).toString();		
	}
	switch (d){
		case 1:s2="01";
			   break;
		case 2:s2="02";
		       break;
		case 3:s2="03";
		       break;
		case 4:s2="04";
		       break;
		case 5:s2="05";
		       break;
		case 6:s2="06";
		       break;
		case 7:s2="07";
		       break;
		case 8:s2="08";
		       break;
		case 9:s2="09";
		       break;
		default:s2=d.toString();		
	}
	return (s1+s2);
}

//判断公历是否放假
function sRest(s){
	var s1="*"+s;
   for(var i=0,len=solarFest.length;i<len;i++){
	   var l=solarFest[i].length;
	 if (s1==solarFest[i].substr(4,l-1))
		 {
			 return true;
		 }
    }
	return false;
 }

//判断农历是否放假
function lRest(s){
	var s1="*"+s;
	 for(var i=0,len=lunarFest.length;i<len;i++){
		 var l=solarFest[i].length;
	      if (s1==lunarFest[i].substr(4,l-1))
		   {
			 return true;
		   }
    }
	return false;
 }

//判断农历月份大小
function monthSize(m){
	
}

//判断农历节气
function lTerm(y,m){
	var tmp1,tmp2;
	var s1,s2;
	td1=getTerm(y,(m-1)*2);  //m月第一个节气在m月的日期
	td2=getTerm(y,(m-1)*2+1);//m月第二个节气在m月的日期
	s1=solarTerm[(m-1)*2];//m月第一个节气名称
	s2=solarTerm[(m-1)*2+1];//m月第二个节气名称
	this.first=td1;
	this.second=td2;
	this.firstStr=s1;
	this.secondStr=s2;
}

//根据公历日期获取相关节日
function sFest(m,d){
	var s=toStr(m,d);
	for(var i=0,len=solarFest.length;i<len;i++){
	   if (s.substr(0,4)==solarFest[i].substr(0,4))
		   {
			   var l=solarFest[i].length;
			   return solarFest[i].substr(5,l-1);
		   }
	}
    s="";
	return s;
}

//根据农历日期获取相关节日
function lFest(m,d){
	var s=toStr(m,d);
	for(var i=0,len=lunarFest.length;i<len;i++){
	   if (s.substr(0,4)==lunarFest[i].substr(0,4))
		   {
			   var l=lunarFest[i].length;
			   return lunarFest[i].substr(5,l-1);
		   }
	}
	s="";
	return s;

}
//＊＊＊＊＊＊＊＊＊＊＊＊＊＊创建日历＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊//

//绘制万年历表
function createCalendar(y,m)
{
	var sYear=y;
	var sMonth=m;//此月份为实际月份
	var startDay=new Date(sYear,sMonth-1,1).getDay();//本月第一天为星期几
	var nDay=sMonthDays(sYear,sMonth);//本月有多少天
	var count=1;
	var numRow=0;
	var num=1;
	var i,j,temp;
	var we=document.getElementById("field-week");
	var da1=document.getElementById("field-date1");
	var da2=document.getElementById("field-date2")
	var ul=document.createElement("ul");
	var ud=document.createElement("ul");
	//var sName1=new lTerm(y,m);

        
	//判断上个月实际天数
	 if(sMonth>1)  
		   temp=sMonthDays(sYear,sMonth-1);//判断上个月的实际天数
	 else
		   temp=sMonthDays(sYear-1,12);//判断上年12月的实际天数
	 for(i=0;i<7;i++){ //绘制第一行星期 
		var li=document.createElement("li");
		var p=document.createElement("p");
		p.innerHTML=weekAry[i];
		if(i==0||i==6)
		p.style.color="Orange";
		li.appendChild(p);
	    ul.appendChild(li);
		we.appendChild(ul);
	 } 
	  for(j=0;j<7;j++){  // 绘制第二行日期表格
		 if(j<startDay){   //上个月未填满的表
		   if(sMonth>1) {
			   var sName=new lTerm(sYear,sMonth);
		   }
			 else var sName=new lTerm(sYear-1,12);
			 
           var p1=document.createElement("p");
	       var li=document.createElement("li");
           var p2=document.createElement("p");
            if(sMonth>1){
              var sObj=new Date(sYear,sMonth-2,temp-startDay+j+1);
			  var s1=sFest(sMonth-2,temp-startDay+j+1);
            }
            else {
			  var sObj=new Date(sYear-1,11,temp-startDay+j+1);
			  var s1=sFest(11,temp-startDay+j+1); 
			}
           var lObj=new Lunar(sObj);
		   var s2=lFest(lObj.month,lObj.month);
           var cName=ChDay(lObj.day);
           p1.innerHTML=(temp-startDay+j+1).toString();       
           p2.innerHTML=cName;
		   p2.style.fontSize="14px";
		   p1.style.color="#C9C9C9";
		   p2.style.color="#C9C9C9";
		   if(j==0||j==6){
				p1.style.color="#FFDEAD";
			    p2.style.color="#FFDEAD";
			 }
		   if(s1!="")
			   {
				   p2.innerHTML=s1;
				   if(sRest(s1))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
			if(s2!="")
			  {
				   p2.innerHTML=s2;
				   if(lRest(s2))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
			  if((temp-startDay+j+1)==sName.first){
			   p2.innerHTML=sName.firstStr;
		   }
		   else if((temp-startDay+j+1)==sName.second){
			   p2.innerHTML=sName.secondStr;
		   }
		   li.appendChild(p1);
           li.appendChild(p2);
		   li.style.backgroundColor="#F7F7F7"
		   ud.appendChild(li);
			  
		  }
		  else{    //绘制从本日起一行的日期
              var p1=document.createElement("p");
			  var li=document.createElement("li");
              var p2=document.createElement("p");
              var sObj=new Date(sYear,sMonth-1,count);
			  var s1=sFest(sMonth-1,count);
              var lObj=new Lunar(sObj);
			  var s2=lFest(lObj.month,lObj.day);
              var cName=ChDay(lObj.day);
              p1.innerHTML=count.toString();
			  p2.innerHTML=cName;
			  var sName=new lTerm(sYear,sMonth);
			  p2.style.fontSize="14px"
			  p1.style.color="Black";
			  p2.style.color="Green";
			 if(j==0||j==6){
				p1.style.color="Orange";
			    p2.style.color="Orange";
			  }
			 if(s1!="")
			   {
				   p2.innerHTML=s1;
				   if(sRest(s1))
					   p2.style.color="Red";
				   else 
					   p2.style.color="#3A5FCD";
			   }
			 if(s2!="")
			  {
				   p2.innerHTML=s2;
				   if(lRest(s2))
					   p2.style.color="Red";
				   else 
					   p2.style.color="#3A5FCD";
			   }
			   if(count==sName.first){
			   p2.innerHTML=sName.firstStr;
		   }
		   else if(count==sName.second){
			   p2.innerHTML=sName.secondStr;
		   }
              li.appendChild(p1);            
              li.appendChild(p2);
			  ud.appendChild(li);
			  count++
			  num++;
		  }
		 da1.appendChild(ud);
	    }
	
	 for(i=0;i<5;i++){//绘制第三行至第七行的日期表格
		 var ue=document.createElement("ul");
		 for(numRow=0;numRow<7;numRow++){
            var p1=document.createElement("p");
		    var li=document.createElement("li");
            var p2=document.createElement("p");
            if(count>nDay) {  //如果此时跳到下个月
				p1.style.color="#C9C9C9";
		        p2.style.color="#C9C9C9";
                count=1;
               if (sMonth==12){
			     var sObj=new Date(sYear+1,0,1);
			     var s1=sFest(0,1);
				 var sName=new lTerm(sYear+1,0);
			   }
               else{
				   var sObj=new Date(sYear,sMonth,1);
				   var s1=sFest(sMonth,1); 
				   var sName=new lTerm(sYear,sMonth);
			   }
                p1.innerHTML=count.toString();
                var lObj=new Lunar(sObj);
				var s2=lFest(lObj.month,lObj.day);
                var cName=ChDay(lObj.day);
				p2.innerHTML=cName;
				p2.style.fontSize="14px"
				 if(numRow==0||numRow==6){
				p1.style.color="#FFDEAD";
			    p2.style.color="#FFDEAD";
			 }   
				 if(s1!="")
			   {
				   p2.innerHTML=s1;
				   if(sRest(s1))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
			if(s2!="")
			  {
				   p2.innerHTML=s2;
				   if(lRest(s2))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
				 if(count==sName.first){
			          p2.innerHTML=sName.firstStr;
		          }
		          else if(count==sName.second){
			          p2.innerHTML=sName.secondStr;
		          }
                li.appendChild(p1);
                li.appendChild(p2);
				li.style.backgroundColor="#F7F7F7"
		        ue.appendChild(li);
                count+=1;
				num++;
				sMonth+=1;
            }
            else {  //此时仍处于本月
            var sObj=new Date(sYear,sMonth-1,count);
		    var s1=sFest(sMonth-1,count);
            var lObj=new Lunar(sObj);
			var s2=lFest(lObj.month,lObj.day);
            var cName=ChDay(lObj.day);
			var sName=new lTerm(sYear,sMonth);
            p1.innerHTML=count.toString();
		    p2.innerHTML=cName;
			p2.style.fontSize="14px"
			p1.style.color="Black";
			p2.style.color="Green";
			if(numRow==0||numRow==6){
				p1.style.color="Orange";
			    p2.style.color="Orange";
			 }
				 if(s1!="")
			   {
				   p2.innerHTML=s1;
				   if(lRest(s1))
					   p2.style.color="Red";
				   else 
					   p2.style.color="#3A5FCD";
			   }
			if(s2!="")
			  {
				   p2.innerHTML=s2;
				   if(sRest(s2))
					   p2.style.color="Red";
				   else 
					   p2.style.color="#3A5FCD";
			   }
			 if(count==sName.first){
			          p2.innerHTML=sName.firstStr;
				      p2.style.color="#9F79EE";
		          }
		          else if(count==sName.second){
			          p2.innerHTML=sName.secondStr;
					  p2.style.color="#9F79EE";
		          }
            li.appendChild(p1);
            li.appendChild(p2);
		    ue.appendChild(li);
			if(num>nDay){
				li.style.backgroundColor="#F7F7F7"
				p1.style.color="#C9C9C9";
			    p2.style.color="#C9C9C9";
				if(numRow==0||numRow==6)
					{
				   p1.style.color="#FFDEAD";
			       p2.style.color="#FFDEAD"; 
					}
				 if(s1!="")
			   {
				   p2.innerHTML=s1;
				   if(lRest(s1))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
			if(s2!="")
			  {
				   p2.innerHTML=s2;
				   if(sRest(s2))
					   p2.style.color="#FFAEB9";
				   else 
					   p2.style.color="#B0C4DE";
			   }
			}
		    count+=1;
			num++;
            }
		 }
		da2.appendChild(ue);
		 
	 }
}

 //更新日历信息
function updateCal(y,m){
	var sYear=y;
	var sMonth=m;
	var s1=document.getElementById("field-date1");
	var s2=document.getElementById("field-date2");
	var u1=s1.childNodes.item(0);
	var l1=s1.getElementsByTagName("li");
	var u2=s2.getElementsByTagName("ul");
	var startDay=new Date(y,m-1,1).getDay();//本月第一天为星期几
	var nDay=sMonthDays(y,m);//本月有多少天
	var count=1;
	var numRow=0;
	var num=1;
	var i,j,temp;
	//判断上个月实际天数
	 if(m!=1)  //
		   temp=sMonthDays(y,m-1);//判断上个月的实际天数
	 else
		   temp=sMonthDays(y-1,12);//判断上年12月的实际天数
	   for(i=0;i<l1.length;i++){  // 更新第二行日期表格
		   l1[i].style.backgroundColor="white";
		  if(i<startDay){  //如果此时处于上一个月
			if(sMonth>1) {
			   var sName=new lTerm(sYear,sMonth);
		      }
			 else var sName=new lTerm(sYear-1,12); 
		   l1[i].style.backgroundColor="#F7F7F7"
           var p=l1[i].getElementsByTagName("p");
		   p[0].style.color="#C9C9C9";
		   p[1].style.color="#C9C9C9";
            if(m>1){
              var sObj=new Date(y,m-2,temp-startDay+i+1);
			  var s1=sFest(m-2,temp-startDay+i+1);
            }
            else {
			   var sObj=new Date(y-1,11,temp-startDay+i+1);
			   var s1=sFest(11,temp-startDay+i+1);
			}
           var lObj=new Lunar(sObj);
		   var s2=lFest(lObj.month,lObj.day);
           var cName=ChDay(lObj.day);
           p[0].innerHTML=(temp-startDay+i+1).toString();
           p[1].innerHTML=cName;
		   
		   p[1].style.fontSize="14px";
		   if(i==0||i==6){
			  p[0].style.color="#FFDEAD";
			  p[1].style.color="#FFDEAD"; 
		   }
			  
		   if(s1!="")
			   {
				   p[1].innerHTML=s1;
				   if(lRest(s1))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
		   if(s2!="")
			  { 
				   p[1].innerHTML=s2;
				   if(lRest(s2))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
			    if((temp-startDay+i+1)==sName.first){
			   p[1].innerHTML=sName.firstStr;
		      }
		   else if((temp-startDay+i+1)==sName.second){
			   p[1].innerHTML=sName.secondStr;
		      }
		  }
		  else{   //此时处于本月
           var p=l1[i].getElementsByTagName("p");
              var sObj=new Date(y,m-1,count);
			  var s1=sFest(m-1,count);
              var lObj=new Lunar(sObj);
			  var s2=lFest(lObj.month,lObj.day);
              var cName=ChDay(lObj.day);
			  var sName=new lTerm(sYear,sMonth);
              p[0].innerHTML=count.toString();
              p[1].innerHTML=cName;
			  p[0].style.color="Black";
			  p[1].style.color="Green";
			   if(i==0||i==6){
			  p[0].style.color="Orange";
			  p[1].style.color="Orange"; 
		      }
			  
			   if(s1!="")
			   {
				   p[1].innerHTML=s1;
				   if(sRest(s1))
					   p[1].style.color="Red";
				   else 
					   p[1].style.color="#3A5FCD";
			   }
			   if(s2!="")
			  {
				   p[1].innerHTML=s2;
				   if(lRest(s2))
					   p[1].style.color="Red";
				   else 
					   p[1].style.color="#3A5FCD";
			   }
			    if(count==sName.first){
			      p[1].innerHTML=sName.firstStr;
		       }
		        else if(count==sName.second){
			      p[1].innerHTML=sName.secondStr;
		       }

		   count++
		   num++;
		  }	
	    }
	
	 for(i=0;i<5;i++){//更新第三行至第七行的日期表格
		 
		 for(numRow=0;numRow<7;numRow++){
		   var l2=u2[i].getElementsByTagName("li");
		   l2[numRow].style.backgroundColor="white";
           var p=l2[numRow].getElementsByTagName("p");
             if(count>nDay) {//如果此时跳到下一个月
				 l2[numRow].style.backgroundColor="#F7F7F7";
				 count=1;
				 
                if (m==12){
					var sObj=new Date(y+1,0,1);
					var s1=sFest(0,1);
					var sName=new lTerm(sYear+1,0);
			   }
				}  
                else{
					var sObj=new Date(y,m,1); 
					var s1=sFest(m,1);
					var sName=new lTerm(sYear,sMonth);
				}				 
                p[0].innerHTML=count.toString();
                var lObj=new Lunar(sObj);
				var s2=lFest(lObj.month,lObj.day);
                var cName=ChDay(lObj.day);
                p[1].innerHTML=cName;
				p[0].style.color="#C9C9C9";
		        p[1].style.color="#C9C9C9";
				 if(numRow==0||numRow==6){
			       p[0].style.color="#FFDEAD";
			       p[1].style.color="#FFDEAD"; 
		         }
			  
				if(s1!="")
			   {
				   p[1].innerHTML=s1;
				   if(sRest(s1))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
			if(s2!="")
			  {
				   p[1].innerHTML=s2;
				   if(lRest(s2))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
			 if(count==sName.first){
			          p[1].innerHTML=sName.firstStr;
		          }
		          else if(count==sName.second){
			          p[1].innerHTML=sName.secondStr;
		          }
                count+=1;
				m+=1;
				num++;
            }
            else {
            var sObj=new Date(y,m-1,count);
			var s1=sFest(m-1,count);
            var lObj=new Lunar(sObj);
			var s2=lFest(lObj.month,lObj.day);
            var cName=ChDay(lObj.day);
			var sName=new lTerm(sYear,sMonth);
            p[0].innerHTML=count.toString();
            p[1].innerHTML=cName;
			 p[0].style.color="Black";
			  p[1].style.color="Green";
			 if(numRow==0||numRow==6){
			  p[0].style.color="Orange";
			  p[1].style.color="Orange"; 
		      }
			  
	
			if(s1!="")
			   {
				   p[1].innerHTML=s1;
				  
				   if(sRest(s1))
					   p[1].style.color="Red";
				   else 
					   p[1].style.color="#3A5FCD";
			   }
			if(s2!="")
			  {
				   p[1].innerHTML=s2;
				   if(lRest(s2))
					   p[1].style.color="Red";
				   else 
					   p[1].style.color="#3A5FCD";
			   }
				if(count==sName.first){
			          p[1].innerHTML=sName.firstStr;
				      p[1].style.color="#9F79EE";
		          }
		          else if(count==sName.second){
			          p[1].innerHTML=sName.secondStr;
					  p[1].style.color="#9F79EE";
		          }
		    if(num>nDay){
				l2[numRow].style.backgroundColor="#F7F7F7";
				p[0].style.color="#C9C9C9";
			    p[1].style.color="#C9C9C9";
				if(numRow==0||numRow==6)
					{
				   p[0].style.color="#FFDEAD";
			       p[1].style.color="#FFDEAD"; 
					}
				if(s1!="")
			   {
				   p[1].innerHTML=s1;
				  
				   if(sRest(s1))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
			if(s2!="")
			  {
				   p[1].innerHTML=s2;
				   if(lRest(s2))
					   p[1].style.color="#FFAEB9";
				   else 
					   p[1].style.color="#B0C4DE";
			   }
			}
            count+=1; 
			num++;
            }
           
		 }
		 
	 }


//改变万年历表
function changeCal()
{
	var y,m;
	y=document.getElementById("field-year").selectedIndex+1900;
	m=document.getElementById("field-month").selectedIndex+1;
	updateCal(y,m);
}

//绘制当天的万年历表
function createToday(){
	updateCal(tYear,tMonth);
}

//初始化
function initCal(){
	var y=tYear;
	var m=tMonth;
	createCalendar(y,m);
}

//返回今日
function backToday(){
	createToday();
	document.getElementById("field-year").selectedIndex=tYear-1900;
	document.getElementById("field-month").selectedIndex=tMonth-1;
}

//加载函数
addLoadEvent(yearSelect);
addLoadEvent(monthSelect);
addLoadEvent(startTime);
//addLoadEvent(initCal);
//addLoadEvent(changeCal);