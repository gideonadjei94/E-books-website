/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
     searchClose = document.getElementById('search-close');
      searchContent = document.getElementById('search-content')

    //   menu show
    //   validate if constant exists
        searchButton.addEventListener('click' , () =>{
           searchContent.classList.add('show-search')
        })
 
    // menu hidden
        searchClose.addEventListener('click' , () =>{
            searchContent.classList.remove('show-search')
        })        
  

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button');
     loginClose = document.getElementById('login-close');
      loginContent = document.getElementById('login-content')

       //   menu show
    //   validate if constant exists
    loginButton.addEventListener('click' , () =>{
        loginContent.classList.add('show-login')
     })

         // menu hidden
         loginClose.addEventListener('click' , () =>{
            loginContent.classList.remove('show-login')
        })        


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('shadow-header')
                        :header.classList.remove('shadow-header')
}
window.addEventListener('scroll' , shadowHeader)


/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides : 'auto',


    autoplay:{
        delay:3000 ,
        disableOnInteraction : false,
    },

    breakpoints : {
        1220:{
            spaceBetween: -32 ,
        }
    }
  })


/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new-swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView:'auto',

    
    breakpoints : {
        1150:{
            slidesPerView : 3,
        }
    }
  })




/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides : 'auto',

    navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

    breakpoints : {
        1150:{
            slidesPerView : 4,
            centeredSlides:false,
        }
    }
  })


/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial-swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor : true,
    slidesPerView:'auto',
    centeredSlides : 'auto',


    breakpoints : {
        1150:{
            slidesPerView : 4,
            centeredSlides:false,
        }
    }
  })


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
