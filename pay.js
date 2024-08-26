

window.addEventListener("load",loadall);
function loadall(){
  alert("please make sure you fill the form below so as Pope Tawadros will pray for you with your details. God bless you as you donate.")
}
let copy1=document.getElementById("copy1")
document.querySelectorAll('.wallcon').forEach(container=>{
      let copy=container.querySelector('.wamcon1')
      copy.addEventListener("focus",()=>copy.select());
      let btn=container.querySelector('.copy');
      btn.addEventListener("click",()=>{
        let text=copy.value;
        copy.select()
        navigator.clipboard.writeText(text);
        copy.value="copied";
        copy1.style.border="3px solid blue"
         copy1.style.top="420px"
        
        
        setTimeout(()=>copy.value=text,2000)
      
      })
    
})