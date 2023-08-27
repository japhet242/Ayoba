import {tim} from'/fonction.js'

const button = document.querySelector('button'), 
      en_tête =document.querySelector('.en_tête'), 
      header=document.querySelector('header'), 
      container1_img=document.querySelector('.container1 .image img'), 
      debut=document.querySelector('.debut h2')
button.addEventListener('click', e=>{
    en_tête.classList.toggle('open')
    header.classList.toggle('open')
})
const observe=new IntersectionObserver((entries) =>{
    entries.forEach(entry=>{
        if (entry.isIntersecting===false) {
            en_tête.classList.add('remove')
        }else{
            en_tête.classList.remove('remove')
        }
    })
})

observe.observe(debut)

//ce script dois toujours être à la fin

setTimeout(async()=>{
    async function appel(){
await tim(1000)
    container1_img.src = '/image/IMG_20230809_160634.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160556.png'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160655.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160634.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160556.png'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160655.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160634.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160556.png'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160655.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160634.jpg'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160556.png'
await tim(1000)
container1_img.src = '/image/IMG_20230809_160655.jpg'
} 

/**
 * @param {number} tim mettre la durée voulue 
 * @return {Promise}
 */
await tim(1000)
appel()
await tim(7000)
appel()
await tim(6000)
appel()
await tim(10000)
appel()
await tim(13000)
appel()

}, 100)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.2,
    speed: 600,
    disabledClass:'swiper-button-disabled', 
    spaceBetween:10,


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
    
    
});


