let nav=document.querySelector(".navigation")
let icon1=document.querySelector(".icon1")
let icon2=document.querySelector(".icon2")


icon1.addEventListener("click",()=>{
   nav.style.width="220px"
   nav.style.display="block"
   
   icon1.style.display="none"
   icon2.style.display="block"
   
   
})
icon2.addEventListener("click",()=>{
   if( nav.style.width=="220px"){
      nav.style.width="0px"
      nav.style.display="block"
   
      icon1.style.display="block"
      icon2.style.display="none"

     
   }
      
  
   

})