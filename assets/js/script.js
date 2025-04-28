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

// custom cursor start
const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX + window.scrollX;
  mouseY = e.clientY + window.scrollY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor(); 

document.addEventListener('mousedown', () => {
  cursor.classList.add('clicked');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicked');
});


// custom cursor end

// preloader

let preloader = document.querySelector(".preloader");

setTimeout(()=>{
    preloader.style.display = "none";   
},2000)