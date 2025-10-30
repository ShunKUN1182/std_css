const shortImgs = document.querySelectorAll(".short_img");
const modalBack = document.querySelector(".modalBack");
const modalImg = document.querySelector(".modalBack > picture > img");
let modalBox = [];
console.log(modalBack);

// console.log(shortImgs , modalBack);

shortImgs.forEach(e => {
    e.addEventListener("click" , ()=>{
        const imageFileName = e.querySelector("img").src.split("images/");
        const addImage = imageFileName[1].replace("s.jpg" , "m.jpg");
        console.log(addImage);
        modalImg.innerHTML = `<img src="images/${addImage}">`
        modalBack.style.display = "flex";
    })
});



// for(let i = 1; i++; i < shortImgs.length + 1){
//     shortImgsmgs[i].addEventListener("click" , ()=>{
//         modalImg.innerHTML = `<img src="images/img_test0${i}_m.jpg">`
//         modalBack.style.display = "flex";
//     }
// )} 

// modalBack.addEventListener("click" , ()=>{
//     modalBack.style.display = "none";
// })

// shortImgs.forEach(e => {
//     e.addEventListener("click" , ()=>{
//     })
// });