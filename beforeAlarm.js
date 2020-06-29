var beforeAlarm=document.querySelectorAll(".beforeAlarm");
var audioAlarm=new Audio('alarm.wav');

function beforeAlarmEngine(){
  var time=new Date();
  var hour=time.getHours();
  var minutes=time.getMinutes();
  var seconds=time.getSeconds();
  var milliseconds=time.getMilliseconds();
  if(beforeAlarm[0].checked&&minutes===54&&seconds>=57&&milliseconds>=400){
    audioAlarm.play();
  }else if(beforeAlarm[1].checked&&minutes===56&&seconds>=57&&milliseconds>=400){
    audioAlarm.play();
  }else if(beforeAlarm[0].checked&&minutes===58&&seconds>=57&&milliseconds>=400){
    audioAlarm.play();
  }
}

beforeAlarmEngine();
setInterval(beforeAlarmEngine,1);
