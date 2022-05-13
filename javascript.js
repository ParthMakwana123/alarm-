console.log("Hello World");

let submitalarm=document.getElementById('submitalarm');

submitalarm.addEventListener("click",playsong);
var audio = new Audio('ring.mp3');

function ringbell(){
    audio.play();
}
    
let stopalarm=document.getElementById("Stopalarm");
stopalarm.addEventListener("click",(e) =>{
    audio.stop();    
    e.preventDefault();
});
function playsong(e){
    e.preventDefault();

    let alarm=document.getElementById('alarm');
    let usertime=alarm.value;
    
    let alarmdate=new Date(usertime);
    // console.log(alarmdate);

    now=new Date();
    // console.log(now)

    let difference=(alarmdate-now);

    setTimeout(() => {
        console.log("playing some audio...");
        ringbell();
    }, difference);

    // console.log("The difference in milisecond"+ (alarmdate-now));




}