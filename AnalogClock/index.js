setInterval(()=>{
date=new Date();
htime=date.getHours();
mtime=date.getMinutes();
stime=date.getSeconds();


console.log(htime,mtime,stime);
hrotation=30*htime + mtime/2;
mrotation=6*mtime;
srotation=6*stime;

hour.style.transform=`rotate(${hrotation}deg)`;
minutes.style.transform=`rotate(${mrotation}deg)`;
seconds.style.transform=`rotate(${srotation}deg)`;


},1000);