const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click',(e)=>{
const p_btn_clicked = e.target;
console.log(p_btn_clicked);

p_btn.forEach((curElem)=> curElem.classList.remove('p-btn-active'));

p_btn_clicked.classList.add('p-btn-active');        

const btn_num = p_btn_clicked.dataset.btnNum;
console.log(btn_num)

const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

p_img_elem.forEach((curElem) => curElem.classList.add('p-image-not-active'));

img_active.forEach((curElem)=>
curElem.classList.remove('p-image-not-active'));
                       
});


// here is a swiper Section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Scroll to top button
  const herosection = document.querySelector('.section-hero')
//   const footerEle = document.querySelector('.section-footer');
  let scrollElement = document.createElement('div');

  const screenTop = ()=>{
     herosection.scrollIntoView({behavior: "smooth"})
  }
  scrollElement.addEventListener('click', screenTop)
//   scrollElement.className.add('scrollTop');

//   scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class= "scroll-top"></ion-icon>`;
//  footerEle.after(scrollElement);

// Counter no code
const counterNum = document.querySelectorAll(".counter-number");

const speed = 200;

counterNum.forEach((curElem) =>{
  const updateNum = ()=>{
    const targetNumber = parseInt(curElem.dataset.number)
    // console.log(targetNumber)

    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum)

    const increNum = Math.trunc(targetNumber/speed);
    if(initialNum<targetNumber){
      curElem.innerText = `${initialNum + increNum}+`;
      setTimeout(updateNum,10)
    }
  };

  updateNum();
})


