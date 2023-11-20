
const words={ presidents:'Paul kagame' ,countries:'Rwanda'}
 dataa=Object.entries(words)
 function determing(){
     const  randomly=dataa[Math.floor(Math.random()*dataa.length)]
     term.innerHTML=`<h3>${randomly[0]}</h3>`
     definition.innerHTML=`<h3>${randomly[1]}</h3>`
   
 }
 const term=document.querySelector('.term')
  const varr=document.querySelector('.display');
const next=document.querySelector('.next')
const definition=document.querySelector('.definition')
 next.addEventListener('click',function(){
     definition.style.display='block'
 })

 varr.addEventListener('click',function(){
     determing()
 })
 determing()