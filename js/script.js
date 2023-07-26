let menu = document.querySelector(".menu")

console.log(menu);


window.addEventListener("scroll",function(){

    let scrolling = window.scrollY

    if(scrolling > 100){ 

    menu.classList.add("menu_fixed")
    

} else{
    menu.classList.remove("menu_fixed")
}    
})


