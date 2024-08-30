let slide=document.querySelectorAll(".slide");
let productdetail = document.querySelector(".pro1");
slide.forEach((button) =>{
    button.addEventListener("click",()=>{
        console.log("button was clicked")
        productdetail.innerText = "pro2" 
   
    });
})

    

