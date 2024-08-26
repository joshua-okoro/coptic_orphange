
let icon=document.getElementById("icon1");
let narve=document.getElementById("narve1");
icon.addEventListener("click",clickme);
function clickme(){
  
   if(narve.style.display=="none"){
    narve.style.display="block"
   }else{
    narve.style.display="none"
   }
}
let logo=document.getElementById("logo");
logo.addEventListener("click",log)
function log(){
   clickme().remove()
}

window.addEventListener("load",loadimg);
function loadimg(){
let setall=setInterval(side,4000)

}


let count=1;
let countlimit=4000;

function side(){
  if(count===1){
    document.getElementById("img1").style.opacity="1px";

    setTimeout(counting,4000)
function counting(){
    document.getElementById("img1").style.right="0px";
    document.getElementById("img1").style.zIndex="1000px";

      document.getElementById("img2").style.right="-1200px";
    document.getElementById("img2").style.zIndex="1500px";

document.getElementById("img3").style.right="1200px";
document.getElementById("img3").style.zIndex="500px";
}
count=2;
document.getElementById("img1").style.opacity="0px";
  }

    else if(count===2){
    document.getElementById("img2").style.opacity="1px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img1").style.right="-1200px";
     document.getElementById("img1").style.zIndex="1500px";

            document.getElementById("img3").style.right="1200px";
     document.getElementById("img3").style.zIndex="500px";
}
count=3;
document.getElementById("img1").style.opacity="1px";
  }

    else if(count===3){
    document.getElementById("img3").style.opacity="0px";

    setTimeout(counting,4000)
function counting(){
      document.getElementById("img2").style.right="0px";
     document.getElementById("img2").style.zIndex="1000px";

       document.getElementById("img3").style.right="-1200px";
     document.getElementById("img3").style.zIndex="1500px";

            document.getElementById("img1").style.right="1200px";
     document.getElementById("img1").style.zIndex="500px";
}
count=1;
document.getElementById("img3").style.opacity="0px";
  }
}

let countme=document.getElementById("countme");
window.addEventListener("load",allload)
let count1=0 ;
let seinter=setInterval(allload,100)
function allload(){
countme.innerHTML=count1+"%";
count1++;
if(count1===50){

  clearInterval(seinter)
}
}
let images=["imgs/IMG_9465.JPG","imgs/IMG_9460.JPG","imgs/IMG_9459.JPG","imgs/IMG_9458.JPG","imgs/IMG_9457.JPG","imgs/IMG_9171.JPG","imgs/IMG_9170.JPG","imgs/IMG_9169.JPG","imgs/IMG_9463.JPG","imgs/IMG_9464.JPG","imgs/IMG_9468.JPG","imgs/IMG_9466.JPG"];
let i=0;
function slideshow(){
  document.getElementById("allimage").src=images[i]
  if(i<images.length-1){
    i++
  }else{
    i=0
  }
  setTimeout("slideshow()",2000)
}
window.onload=slideshow;
let readmore=document.getElementById("readmore");
let nerstory=document.getElementById("nerstory");
readmore.addEventListener("click",clickmore);
function clickmore(){
  if(nerstory.style.display=="none"){
    nerstory.style.display="block";
  }else{
    nerstory.style.display="none"
  }
}
clickmore()
let exitall=document.getElementById("exitall");
exitall.addEventListener("click",removeall);
function removeall(){
  clickmore().removed()
}


let nraniaer=document.getElementById("rania");
let readmoree=document.getElementById("readmoree");
readmoree.addEventListener("click",clickmee);
function clickmee(){

  if(rania.style.display=="none"){
    rania.style.display="block"
  }else{
    rania.style.display="none"
  }
}
clickmee()

let exitall1=document.getElementById("exitall1");
exitall1.addEventListener("click",removeall1);
function removeall1(){
  clickmee().removed()
}

let fady=document.getElementById("fady");
let readmore2=document.getElementById("readmore2");
readmore2.addEventListener("click",clickm2);
function clickm2(){

  if(fady.style.display=="none"){
    fady.style.display="block"
  }else{
    fady.style.display="none"
  }
}
clickm2()

let exitall2=document.getElementById("exitall2");
exitall2.addEventListener("click",removeall2);
function removeall2(){
  clickm2().removed()
}

let joshua=document.getElementById("joshua");
let readmore3=document.getElementById("readmore3");
readmore3.addEventListener("click",clickm3);
function clickm3(){

  if(joshua.style.display=="none"){
    joshua.style.display="block"
  }else{
    joshua.style.display="none"
  }
}
clickm3()

let exitall3=document.getElementById("exitall3");
exitall3.addEventListener("click",removeall3);
function removeall3(){
  clickm3().removed()
}

let john=document.getElementById("john");
let readmore4=document.getElementById("readmore4");
readmore4.addEventListener("click",clickm4);
function clickm4(){

  if(john.style.display=="none"){
    john.style.display="block"
  }else{
    john.style.display="none"
  }
}
clickm4()

let exitall4=document.getElementById("exitall4");
exitall4.addEventListener("click",removeall4);
function removeall4(){
  clickm4().removed()
}

let melad=document.getElementById("melad");
let readmore5=document.getElementById("readmore5");
readmore5.addEventListener("click",clickm5);
function clickm5(){

  if(melad.style.display=="none"){
    melad.style.display="block"
  }else{
    melad.style.display="none"
  }
}
clickm5()

let exitall5=document.getElementById("exitall5");
exitall5.addEventListener("click",removeall5);
function removeall5(){
  clickm5().removed()
}

let MAGED=document.getElementById("MAGED");
let readmore6=document.getElementById("readmore6");
readmore6.addEventListener("click",clickm6);
function clickm6(){

  if(MAGED.style.display=="none"){
    MAGED.style.display="block"
  }else{
    MAGED.style.display="none"
  }
}
clickm6()

let exitall6=document.getElementById("exitall6");
exitall6.addEventListener("click",removeall6);
function removeall6(){
  clickm6().removed()
}

let allmembers=document.getElementById("allmembers")
let sec=document.getElementById("sec");
allmembers.addEventListener("click",memberclick);
function memberclick(){
  if(sec.style.display=="none"){
    sec.style.display="block";
    document.getElementById("footer").style.top="5600px"
  }else{
    sec.style.display="none"
     document.getElementById("footer").style.top="3860px"
  }


}