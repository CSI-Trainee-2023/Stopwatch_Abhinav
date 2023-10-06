var msec=0;
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
        document.getElementById("button2").innerHTML="Reset";
    }
}
function start() {
    isStart=true;
    document.getElementById("startbutton").innerHTML="Stop";
    timer();
}  
function timer() {
    if(isStart==true){
    msec++;
    msec=parseInt(msec);
    sec=parseInt(sec);
    min=parseInt(min);
    hr=parseInt(hr);
    if(msec==100)
    {
        msec=0;
        sec++;
    }
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
    if(msec<10)
    {
        msec="0" +msec;
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
        document.getElementById("msec").innerHTML=msec;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("min").innerHTML=min;
        document.getElementById("hr").innerHTML=hr;
    setTimeout("timer()",10);
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
     let list3=document.getElementById("flag");
     
     let item=document.createElement("li"); 
     item.textContent=hr+":"+min+":"+sec+":"+msec;
     list3.appendChild(item); 
     
}
 function reset(){
    isStart=false;
    hr=0;
    min=0;
    sec=0;
    msec=0;
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("msec").innerHTML="00";
    document.getElementById("button2").innerHTML="Lap";
 }
 document.addEventListener('keydown',(event)=>{
    event.preventDefault();
    if(event.ctrlKey){
        if(event.key=== 's') start();
        if(event.key=== 'x') stop();
        if(event.key=== 'r') reset();
        if(event.key=== 'l') lap();

    }
});
function erase() {
    console.log("hi");
    document.getElementById("flag").innerHTML="";
}