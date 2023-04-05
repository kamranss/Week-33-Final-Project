$(document).ready(function(){
    $('.category2-right-side').slick({
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10px',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          }
        ]
      });



      let buttonPrev = `
      <div class="slider-arrow-box-prev d-flex align-items-center justify-content-center">
        <i class="fa-solid fa-chevron-left bs-prev "></i>
      </div>
     
     `

      let buttonNext = `
      <div class="slider-arrow-box-next">
        <i class="fa-solid fa-chevron-right bs-next"></i>
      </div>
      `


     let category2 =  $(".category2-right-side");
      
      let sliderButtonPrev = $(".slick-prev");
      let sliderButtonNext = $(".slick-next"); 
       // sliderButtonPrev.text("");

       category2.append(buttonPrev);
       category2.append(buttonNext); 

      let newButtonPrev = $(".fa-chevron-left");
      let newButtonNext = $(".fa-chevron-right");
       
      newButtonPrev.on('click', function() {
        // Trigger a click event on the slider button
        sliderButtonPrev.trigger('click');
      });
      
      newButtonNext.on('click', function() {
        // Trigger a click event on the slider button
        sliderButtonNext.trigger('click');
      });


      


      // sliderButtonPrev.append(buttonPrev);
      // sliderButtonNext.append(buttonNext);



})

