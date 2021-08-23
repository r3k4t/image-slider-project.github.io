let pictures = [
  "photo-0","photo-1","photo-2","photo-3","photo-4","photo-5","photo-6"
];


let buttons = document.querySelectorAll(".btn")
let imgContainer = document.querySelector(".img-container")
let counter = 0


buttons.forEach(function(button){
  button.addEventListener('click',function(e){
   if(button.classList.contains('btn-left')){
     counter--
       if(counter < 0){
         counter = pictures.length -1
       }else{
         imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
         
       }
   }
   if(button.classList.contains('btn-right')){
     counter++
       if(counter > pictures.length -1){
         counter = 0
       }else{
         imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
       }
   }
  })
})