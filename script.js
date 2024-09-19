const icon = document.querySelector(".ri-menu-3-line")


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicButtons:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      0: {
        slidesPreView: 1
      },
      768:{
        slidesPreView: 2
      },
      1024:{
        slidesPreView: 3
      }
    }
  
  });

    

icon.addEventListener('click',() =>{
  icon.innerText = "about"
})

