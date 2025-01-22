var nav=document.querySelector("nav")
var sidebar=document.querySelector(".sidebar")
var menu=document.querySelector("#menu")
var closes=document.querySelector("#close")
menu.addEventListener("click",()=>{
    nav.style.display="none"
    sidebar.style.display="block"
})


closes.addEventListener("click",()=>{
    nav.style.display="flex"
    sidebar.style.display="none"
})