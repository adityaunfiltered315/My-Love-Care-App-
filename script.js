/* =====================================
   LOVE CARE APP 2026
   PREMIUM SCRIPT.JS ❤️
===================================== */



// ===============================
// WELCOME SCREEN
// ===============================


const startBtn =
document.getElementById("startBtn");


const welcome =
document.getElementById("welcome");



startBtn.addEventListener("click",()=>{


    welcome.classList.add("hide");


    createHearts();


});








// ===============================
// DAY / NIGHT MODE
// ===============================


const themeBtn =
document.getElementById("themeBtn");



themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    if(document.body.classList.contains("dark")){


        themeBtn.innerHTML =
        `<i class="ri-sun-fill"></i>`;


    }
    else{


        themeBtn.innerHTML =
        `<i class="ri-moon-fill"></i>`;


    }


});








// ===============================
// MOOD SELECTOR
// ===============================


const moodButtons =
document.querySelectorAll(".mood");


const moodText =
document.getElementById("moodText");



moodButtons.forEach(button=>{


button.addEventListener("click",()=>{


    moodText.innerHTML =
    button.dataset.msg;



    createHearts();



});


});








// ===============================
// HUG BUTTON
// ===============================


const hugBtn =
document.getElementById("hugBtn");



hugBtn.addEventListener("click",()=>{


hugBtn.innerHTML =
"🤗 Hug Sent ❤️";


createHearts();



});









// ===============================
// LOVE LETTER
// ===============================


const letterBtn =
document.getElementById("letterBtn");


const letterText =
document.getElementById("letterText");



let letter =

`
My Princess ❤️


I know today is difficult.


But I want you to remember...

you are strong,

you are beautiful,

and you are very special to me.


Take care of yourself 🌸


Always Smile ❤️
`;




letterBtn.addEventListener("click",()=>{


letterText.innerHTML="";


let i=0;



function typing(){


if(i < letter.length){


letterText.innerHTML +=
letter.charAt(i);


i++;


setTimeout(
typing,
50
);


}


}


typing();



});









// ===============================
// GIFT SURPRISE
// ===============================


const gift =
document.getElementById("gift");


const giftBtn =
document.getElementById("giftBtn");


const giftMessage =
document.getElementById("giftMessage");




giftBtn.addEventListener("click",()=>{


gift.innerHTML="💖";


giftMessage.innerHTML =

"❤️ My biggest gift is your smile. Always stay happy 🌸";



createHearts();



});







// ===============================
// FLOATING HEART SYSTEM
// ===============================


function createHearts(){



const container =
document.querySelector(".floating-hearts");



for(let i=0;i<20;i++){



let heart =
document.createElement("div");



heart.className="heart";

heart.innerHTML="❤️";



heart.style.position="fixed";


heart.style.bottom="-20px";



heart.style.left =
Math.random()*100+"vw";



heart.style.fontSize =
(15+Math.random()*30)+"px";



heart.style.animation =
"floatHeart 6s linear";



container.appendChild(heart);




setTimeout(()=>{


heart.remove();


},6000);



}



}







// ===============================
// AUTO HEART EFFECT
// ===============================


setInterval(()=>{


let container =
document.querySelector(".floating-hearts");



let heart =
document.createElement("div");



heart.className="heart";


heart.innerHTML="💗";


heart.style.position="fixed";

heart.style.bottom="-20px";


heart.style.left =
Math.random()*100+"vw";


heart.style.fontSize="22px";


heart.style.animation =
"floatHeart 8s linear";



container.appendChild(heart);



setTimeout(()=>{


heart.remove();


},8000);



},2000);







