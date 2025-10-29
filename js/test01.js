const modal = document.querySelector(".modal");
const mainImg = document.querySelector(".main_img > picture");
const modalBack = document.querySelector(".modalBack");

console.log(modal , mainImg);

mainImg.addEventListener("click" , ()=>{
    modalBack.style.display = "block";
})

modalBack.addEventListener("click" , ()=>{
    modal.style.display = "none";
    modalBack.style.display = "none";
})