const shortImg = document.querySelector(".short_img");
let addModal = 0;
let modalBack = "";
// const modalBack = document.querySelector(".modalBack");

// shortImg.addEventListener("click" , ()=>{
//     modalBack.style.display = "flex";
// })
shortImg.addEventListener("click" , ()=>{
    if (addModal == 0) {
        document.querySelector("body").insertAdjacentHTML("beforeend" , 
            `<div class="modalBack">
            <picture>
            <img src="images/img_test01_m.jpg" alt="画像">
            </picture>
            </div>`
        );
        addModal++;
        modalBack = document.querySelector(".modalBack");
        modalBack.style.display = "flex";
        console.log(modalBack);
    }else{
        modalBack.style.display = "flex";
    }
    modalBack.onclick = function() {
        modalBack.style.display = "none";
    }
})
