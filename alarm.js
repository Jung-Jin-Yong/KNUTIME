var hourAlarm=document.querySelector("#hourAlarm");
var correctAlarm=document.querySelector("#correctAlarm");
var inputTime=document.querySelectorAll(".inputTime");
var beforeAlarm=document.querySelectorAll(".beforeAlarm");
var audioAlarm=new Audio('alarm.wav');

function hourAlarmEngine(){
  var time=new Date();
  var hour=time.getHours();
  var minutes=time.getMinutes();
  var seconds=time.getSeconds();
  var milliseconds=time.getMilliseconds();
  if(hourAlarm.checked){
    if(seconds>=57&&minutes===59&&milliseconds>=400){
      audioAlarm.play();
    }
  }

  correctAlarmEngine(hour,minutes,seconds,milliseconds);
}

function correctAlarmEngine(hour,minutes,seconds,milliseconds){
  if(hour===parseInt(inputTime[0].value)&&minutes===parseInt(inputTime[1].value)-1&&seconds>=56&&milliseconds>=400&&correctAlarm.checked===true){
    audioAlarm.play();
  }
}

hourAlarmEngine();
setInterval(hourAlarmEngine,1);
//정각 알림기능 만들기 완료. 이제 특정 시간 알람 만들어야 한다.
