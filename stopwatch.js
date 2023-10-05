var hr=0;
var min=0;
var sec=0;
var flag=0;
var isStart=false;
function pre() {
    flag++;
    if(flag%2 !=0)
    {
        start();
        console.log("start");
    }
    else{
        stop();
        console.log("stop");
    }
}
function start() {
    isStart=true;
    document.getElementById("startbutton").innerHTML="Stop";
    timer();
}  
function timer() {
    if(isStart==true){
    sec++;
    sec=parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);
    if(sec==60)
    {
        sec=0;
        min++;
    }
    if(min==60)
    {
        min=0;
        hr++;
    }
    if(sec<10)
    {
       sec="0" +sec;
    }
    if(min<10)
    {
        min="0" +min;
    }
    if(hr<10)
    {
        hr="0" +hr;
    }
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        document.getElementById("hr").innerHTML=hr;
    setTimeout("timer()",1000);
}
}
function stop(){
    isStart=false;
    document.getElementById("startbutton").innerHTML="Start";
}
 function lapbutton()
{
      if(isStart==true){
        lap();
      }
      else{
        reset();
      }
}
function lap() {
     
}
 