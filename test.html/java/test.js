let button=document.querySelector("#btn");
let page=document.querySelector(".page");
let save=document.querySelector("#save");

button.addEventListener("click",()=>{
    page.classList.remove("d-none");    
});

save.addEventListener("click",()=>{
    
    alert("your information has  been saved");
})
