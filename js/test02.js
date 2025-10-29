const imgs = document.querySelectorAll(".short_img");
const modalBack = document.querySelector(".modalBack");
const modalImg = document.querySelector("img")
console.log(imgs);


for(let i = 1; i++; i < imgs.length + 1){
    imgs[i].addEventListener("click" , ()=>{
        modalImg.innerHTML = `<img src="images/img_test0${i}_m.jpg">`
        modalBack.style.display = "flex";
    }
)} 

modalBack.addEventListener("click" , ()=>{
    modalBack.style.display = "none";
})