const shortImg = document.querySelector(".short_img");
const modalBack = document.querySelector(".modalBack");

shortImg.addEventListener("click" , ()=>{
    modalBack.style.display = "flex";
})

modalBack.addEventListener("click" , ()=>{
    modalBack.style.display = "none";
})