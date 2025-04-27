// services section
let secondaryButtons = document.querySelectorAll(".sec-btn");

secondaryButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        secondaryButtons.forEach(b=>{
            b.classList.remove("active");
        })
        button.classList.add("active");
    })
})

// preloader

let preloader = document.querySelector(".preloader");

setTimeout(()=>{
    preloader.style.display = "none";   
},2000)