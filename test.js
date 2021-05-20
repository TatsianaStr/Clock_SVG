'use strict';

var timerId=0;
var angleValue=0; //начальный угол
const num=12;//значение элементов на часах
const distance= 360/12;
const radius = 300/2 -30; //width/2 - (r elemClock*2)
var SVGclock = document.getElementById('clock');
 
var time = new Date();
//создаем круг часов
var circleClock = document.createElementNS("http://www.w3.org/2000/svg",'circle');
circleClock.setAttribute("cx", 150);
circleClock.setAttribute("cy", 150);
circleClock.setAttribute("r", 150);
circleClock.setAttribute("fill", '#FFED40');
SVGclock.appendChild(circleClock);
var svgCenterX=SVGclock.getBoundingClientRect().left + SVGclock.getBoundingClientRect().width / 2;
var svgCenterY=SVGclock.getBoundingClientRect().top + SVGclock.getBoundingClientRect().height / 2;
  //элементы цифирблата
   for(var i=1;i<=num; i++){        
    var elemClock=document.createElementNS("http://www.w3.org/2000/svg",'circle');               
    var angleValue= distance+angleValue; 
     var angle =angleValue / 180 * Math.PI;

    var elemClockCenterX = Math.round(svgCenterX + radius * Math.sin(angle) - SVGclock.getBoundingClientRect().left);;
    var elemClockCenterY = Math.round(svgCenterY - radius * Math.cos(angle) - SVGclock.getBoundingClientRect().top);
           elemClock.setAttribute("cx",elemClockCenterX);
           elemClock.setAttribute("cy",elemClockCenterY);
           elemClock.setAttribute('r',15);
           elemClock.setAttribute("stroke","#FFF273");
           elemClock.setAttribute("fill","#A69600");                
           elemClock = SVGclock.appendChild(elemClock);

           var txt=document.createElementNS("http://www.w3.org/2000/svg",'text');
           txt.textContent=i;
           txt.setAttribute("x",elemClockCenterX);
           txt.setAttribute("y",elemClockCenterY);
           txt.style.fill="black"; 
           txt.setAttribute("text-anchor", "middle");
	       txt.setAttribute("dominant-baseline", "central");
	       txt.style.fontSize = 20;          
           txt=SVGclock.appendChild(txt);            

      }
//электронные часы
var radiusDW=70;
var svgDW = document.createElementNS("http://www.w3.org/2000/svg", "rect");
SVGclock.appendChild(svgDW);
svgDW.setAttribute('width', 100);
svgDW.setAttribute('height',30);
svgDW.setAttribute("x", (svgCenterX - svgDW.getBoundingClientRect().width / 2) - SVGclock.getBoundingClientRect().left);
svgDW.setAttribute("y", (svgCenterY - radiusDW) - SVGclock.getBoundingClientRect().left);
svgDW.setAttribute("fill", '#FFED40');
//цифры электронных часов
var hoursDW = document.createElementNS("http://www.w3.org/2000/svg", "text");
var xHoursDW = (svgCenterX - hoursDW.getBoundingClientRect().width / 2)+ - SVGclock.getBoundingClientRect().left-40;
hoursDW.setAttribute("x", xHoursDW);
hoursDW.setAttribute("y", (svgCenterY - radiusDW) - hoursDW.getBoundingClientRect().top);
hoursDW.setAttribute("text-anchor", "middle");
hoursDW.setAttribute("dominant-baseline", "central");
hoursDW.style.fontSize = 25;
hoursDW = SVGclock.appendChild(hoursDW);
// :
var elem=document.createElementNS("http://www.w3.org/2000/svg",'text');
var xElem = xHoursDW+20;
 elem.setAttribute("x",xElem);
 elem.setAttribute("y",(svgCenterY - radiusDW) - elem.getBoundingClientRect().top); 
 elem.setAttribute("text-anchor", "middle");
 elem.setAttribute("dominant-baseline", "middle");
 elem.textContent=':';
 elem.style.fontSize = 25;
 SVGclock.appendChild(elem);

var minutesDW = document.createElementNS("http://www.w3.org/2000/svg", "text");
minutesDW.setAttribute("x", (svgCenterX - minutesDW.getBoundingClientRect().width / 2) - SVGclock.getBoundingClientRect().left);
minutesDW.setAttribute("y", (svgCenterY - radiusDW) - minutesDW.getBoundingClientRect().top);
minutesDW.setAttribute("text-anchor", "middle");
minutesDW.setAttribute("dominant-baseline", "central");
minutesDW.style.fontSize = 25;
minutesDW = SVGclock.appendChild(minutesDW);
//:
var elemS=document.createElementNS("http://www.w3.org/2000/svg",'text');
var xElem = xHoursDW+60;
 elemS.setAttribute("x",xElem);
 elemS.setAttribute("y",(svgCenterY - radiusDW) - elemS.getBoundingClientRect().top); 
 elemS.setAttribute("text-anchor", "middle");
 elemS.setAttribute("dominant-baseline", "middle");
 elemS.textContent=':';
 elemS.style.fontSize = 25;
 SVGclock.appendChild(elemS);

var secDW = document.createElementNS("http://www.w3.org/2000/svg", "text");
var xSecDW = (svgCenterX - secDW.getBoundingClientRect().width / 2) - SVGclock.getBoundingClientRect().left+40;
secDW.setAttribute("x", xSecDW);
secDW.setAttribute("y", (svgCenterY - radiusDW) - secDW.getBoundingClientRect().top);
secDW.setAttribute("text-anchor", "middle");
secDW.setAttribute("dominant-baseline", "central");
secDW.style.fontSize = 25;
secDW = SVGclock.appendChild(secDW);

//стрелки
var clockHandsHours,
    clockHandsMinutes,
    clockHandsSec;
 var clockHandsHoursHeigth =50;
 var clockHandsHoursWidth = 9;   
 var clockHandsMinHeigth =110;
 var clockHandsMinsWidth = 5;  
 var clockHandsSecsHeigth =135;
 var clockHandsSecWidth = 2;    

    clockHandsHours = document.createElementNS("http://www.w3.org/2000/svg", "line");
    clockHandsHours.setAttribute("x1", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsHours.setAttribute("y1", svgCenterY - clockHandsHoursHeigth - SVGclock.getBoundingClientRect().top);
    clockHandsHours.setAttribute("x2", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsHours.setAttribute("y2", svgCenterY);
    clockHandsHours.setAttribute("stroke", "black");
    clockHandsHours.setAttribute("stroke-width", clockHandsHoursWidth);
    clockHandsHours.setAttribute("stroke-linecap", "round");
    SVGclock.appendChild(clockHandsHours);
    
    clockHandsMinutes = document.createElementNS("http://www.w3.org/2000/svg", "line");
    clockHandsMinutes.setAttribute("x1", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsMinutes.setAttribute("y1", svgCenterY - clockHandsMinHeigth - SVGclock.getBoundingClientRect().top);
    clockHandsMinutes.setAttribute("x2", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsMinutes.setAttribute("y2", svgCenterY);
    clockHandsMinutes.setAttribute("stroke", "black");
    clockHandsMinutes.setAttribute("stroke-width", clockHandsSecWidth);
    clockHandsMinutes.setAttribute("stroke-linecap", "round");
    SVGclock.appendChild(clockHandsMinutes);
    
     clockHandsSec = document.createElementNS("http://www.w3.org/2000/svg", "line");
    clockHandsSec.setAttribute("x1", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsSec.setAttribute("y1", svgCenterY - clockHandsSecsHeigth - SVGclock.getBoundingClientRect().top);
    clockHandsSec.setAttribute("x2", svgCenterX - SVGclock.getBoundingClientRect().left);
    clockHandsSec.setAttribute("y2", svgCenterY);
    clockHandsSec.setAttribute("stroke", "red");
    clockHandsSec.setAttribute("stroke-width", clockHandsSecWidth);
    clockHandsSec.setAttribute("stroke-linecap", "round");
    SVGclock.appendChild(clockHandsSec);   
    
   
    clockHandsHours.style.transformOrigin = "center 150px";
    clockHandsMinutes.style.transformOrigin = "center 150px";
    clockHandsSec.style.transformOrigin = "center 150px";   

clockHandsHours.style.top = svgCenterY - clockHandsHours.offsetHeight + "px";
clockHandsHours.style.left = svgCenterX - clockHandsHours.offsetWidth/2 + 'px';

clockHandsMinutes.style.top = svgCenterY - clockHandsMinutes.offsetHeight + "px";
clockHandsMinutes.style.left = svgCenterX - clockHandsMinutes.offsetWidth/2 + 'px';

clockHandsSec.style.top = svgCenterY - clockHandsSec.offsetHeight + 'px';
clockHandsSec.style.left = svgCenterX - clockHandsSec.offsetWidth/2 + 'px';

function update(){    
var time = new Date;
var hours = time.getHours();
      if (hours < 10) hours = '0' + hours;
      hoursDW.textContent = hours;

var minutes = time.getMinutes();
      if (minutes < 10) minutes = '0' + minutes;
      minutesDW.textContent = minutes;

var seconds = time.getSeconds();
      if (seconds < 10) seconds = '0' + seconds;
      secDW.textContent = seconds;  
     
var s = 360/60 * seconds; 
clockHandsSec.style.transform = "rotate(" + s + "deg)";
	    // минутнытные стрелки
var m = 360/60 * minutes; 
	    clockHandsMinutes.style.transform = "rotate(" + m+ "deg)";
	    // часовые стрелки
var h =360/12 * (hours + minutes/60); 
	    clockHandsHours.style.transform = "rotate(" + h + "deg)";
    }
    function clockStart() {
      timerId=setInterval(update, 1000);
      update(); // <--  начать тут же, не ждать 1 секунду пока setInterval сработает     
    }   
 window.addEventListener('load', update);
window.setInterval (clockStart, 1000);
  