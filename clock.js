var nowTime=document.querySelector(".nowTime");
var clock=nowTime.querySelector("#clock");
var linkToPage=document.querySelector("#linkToPage");
var linkAccess=document.querySelector("#linkAccess");

function getTime(){
  var morning='오전';
  var afternoon='오후';
  var time=new Date();
  var hour=time.getHours();
  var minutes=time.getMinutes();
  var seconds=time.getSeconds();
  clock.innerText=`${hour<12?morning:afternoon} ${hour}시 ${minutes}분 ${seconds}초`;
}

getTime();
var interval=setInterval(getTime,1);
