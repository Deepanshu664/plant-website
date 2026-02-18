const scrollImg = document.querySelectorAll('.scroll-imgs')[0];
const leftBtn = document.querySelector('.left-btn');
const rightBtn= document.querySelector('.right-btn');

rightBtn.addEventListener('click',()=>{
    scrollImg.scrollLeft += 1355;
})
console.log(scrollImg)
leftBtn.addEventListener('click',()=>{
    scrollImg.scrollLeft -= 1355;
})