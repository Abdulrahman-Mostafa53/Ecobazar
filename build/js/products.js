//Control showing and hiding filters container on mobile and bigger screens

const container=document.querySelector("main search")
const range=document.querySelector("search fieldset:nth-of-type(2) div div")
range.children[1].addEventListener("ondrag",()=>{
    console.log("dragg");
})
const hideFlt=document.getElementById("hide-flt")
const mainSection=document.querySelector("section section>div")
const overlay=document.querySelector("overlay")
const filters=document.querySelector("search")
const showMobileFlt=document.getElementById("show-mobile-flt")
const hideMobileFlt=document.getElementById("hide-mobile-flt")

window.addEventListener("resize",()=>{
    if(window.screen.availWidth>=768){
        overlay.classList.add("hidden")
        filters.classList.replace("translate-y-0","translate-y-full")
    }
})
showMobileFlt.addEventListener("click",()=>{
    if(window.screen.availWidth<=768){
        filters.classList.replace("translate-y-full","translate-y-0")
        overlay.classList.remove("hidden")
    }
    else{    
        filters.classList.replace("md:hidden","md:flex")
        mainSection.classList.replace("md:col-span-12","md:col-span-9")
        mainSection.children[0].classList.replace("md:block","md:hidden")
        mainSection.children[1].children[1].classList.replace("md:block","md:hidden")
        mainSection.children[1].children[2].classList.replace("md:hidden","md:block")
    }
})
hideMobileFlt.addEventListener("click",()=>{
    filters.classList.replace("translate-y-0","translate-y-full")
    overlay.classList.add("hidden")
})

hideFlt.addEventListener("click",()=>{
    console.log("ddd");
    filters.classList.replace("md:flex","md:hidden")
    mainSection.classList.replace("md:col-span-9","md:col-span-12")
    mainSection.children[0].classList.replace("md:hidden","md:block")
    mainSection.children[1].children[1].classList.replace("md:hidden","md:block")
    mainSection.children[1].children[2].classList.replace("md:block","md:hidden")
})

//Show and hide the filters

const angles=document.querySelectorAll("search legend i")
angles.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        const fieldset=ele.parentElement.parentElement
        fieldset.children[1].classList.toggle("h-0")
        ele.classList.toggle("rotate-180")
    })
})