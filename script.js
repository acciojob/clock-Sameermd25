//your JS code here. If required.
const timer=document.getElementById("timer");

const date=new Date();

setInterval(()=>{
        const currentTime=new Date();
		timer.innerText=currentTime.toLocaleDateString()+", "+currentTime.toLocaleTimeString();
},1000);