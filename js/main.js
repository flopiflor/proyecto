let btn_menu = document.querySelector(".btn-menu")
let menu = document.querySelector(".nav-container")
let check = document.querySelector(".check")
let show = document.querySelector(".show")
btn_menu.addEventListener('click', () =>{
 if (check.checked) {
    
    menu.style.height = ("300px")
    show.style.display = "block"
    

 } else {
    menu.style.height = ("0px")
    show.style.display = "none"
   
   
 }
})