$(document).ready(function(){
    $('.category2-products').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });



      let buttonPrev = `
      <i class="fa-solid fa-chevron-left bs-prev "></i>
     `

      let buttonNext = `
      <i class="fa-solid fa-chevron-right bs-next"></i>
      `


    //  let category2 =  $(".category2-products");
      
      // let newButtonPrev = $(".carousel-control-prev");
      // let newButtonNext = $(".carousel-control-next");

      let sliderButtonPrev = $(".slick-prev");
      sliderButtonPrev.text("");
      let sliderButtonNext = $(".slick-next");

      sliderButtonPrev.append(buttonPrev);
      sliderButtonNext.append(buttonNext); 



})

