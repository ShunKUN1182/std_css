const shortImgs = document.querySelectorAll(".short_img");
// const modalBack = document.querySelector(".modalBack");
const modalImg = document.querySelector(".modalBack > picture");

const animation = [
    { opacity: 0} , 
    { opacity: 1} ,
];

const reverseAnimation = [
    { opacity: 1} , 
    { opacity: 0} ,
];


const modalBackAnimationTiming = {
    duration: 50,
    iteration: 1,
};

const modalImgAnimationTiming = {
    duration: 500,
    iteration: 1,
};

const modalDiv = document.createElement("div");
modalDiv.classList.add("modalBack");
const modalPicture = document.createElement("picture");
const modalBackImg = document.createElement("img");


shortImgs.forEach(e => {
    e.addEventListener("click" , {target: e , handleEvent: showModal})
});    

function showModal() {
    const imageFileName = this.target.querySelector("img").src.split("images/");
    const addImage = imageFileName[1].replace("s.jpg" , "m.jpg");
    modalBackImg.src =`images/${addImage}`;
    modalPicture.append(modalBackImg);
    modalDiv.append(modalPicture);
    document.body.append(modalDiv);
    animationA();
    animationB();
    modalDiv.addEventListener("click" , closeModal);
};

function closeModal(event) {
    if(event.target != modalDiv) return;
    closeAnimation();
    // document.querySelector(".modalBack").remove();
};



async function animationA() {
    try {
        await document.querySelector(".modalBack").animate(animation , modalBackAnimationTiming).finished;
        console.log("Aが無事実行されました");
    }catch{
        console.log("Aでエラーが発生しました");
    }
}

async function animationB() {
    try {
        await modalBackImg.animate(animation, modalImgAnimationTiming).finished;
        console.log("Bが無事実行されました");
    }catch{
        console.log("Bでエラーが発生しました");
    }
}

async function closeAnimation() {
    try {
        await document.querySelector(".modalBack").animate(reverseAnimation, modalImgAnimationTiming).finished;
        console.log("Cが無事実行されました");
        document.querySelector(".modalBack").remove();
    }catch{
        console.log("Cでエラーが発生しました");
    }
}

// async function calcGo() {
    
//     const calc = new Promise((resolve)=>{
//         console.log("start!!");
        
//     setTimeout(()=>{
//         const result = 100+1000;
//         resolve(result);
//     },1000)
// });

// console.log(await calc);

// }

// calcGo();