$(function(){
    // 메인슬라이드 영역
    var swiper = new Swiper(".main-slide", {
        effect:"fade",
        loop:true,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
    
        },
        pagination: {
             el: ".swiper-pagination",
             clickable:true,
        }
    });
 

    // system-slide 영역

    // 텍스트
    systemArr = [
        '키오스크&nbsp;&nbsp;',
        '바코드프리&nbsp;&nbsp;',
        '모바일약국APP&nbsp;&nbsp;',
        'PMR 약력관리&nbsp;&nbsp;',
        'POS&nbsp;&nbsp;',
    ]

    var lineup = new Swiper(".system-slide2", {
        effect:"fade",
         autoplay:{
            delay:1500,
            disableOnInteraction:false
    
        },
        pagination:{
            el:".sc-system .tab-nav",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + systemArr[index] + "</span>";
            },
        }
    });

    // 슬라이드 바뀔때 이벤트 (슬라이딩)
    lineup.on('slideChange',function(){
        systemFraction()
    })



   function systemFraction(){
    $('.sc-system .curr').text(num(lineup.realIndex+1))
    $('.sc-system .total').text(num(lineup.slides.length))
   }

   systemFraction()


   $('.sc-system .autoplay').click(function(){

    if ($(this).hasClass('on')) {
        lineup.autoplay.start()
    } else {
        lineup.autoplay.stop()
    }

    $(this).toggleClass('on')
   })



    // lineup2.controller.control = lineup1

    function num(number){
        if(number < 10){
            return `0${number}`
        }else{
            return number;
        }
    }


    // 퀵 버튼
    $('.fix-top .btn-top').click(function(){
     window.scrollTo({top:0,behavior:"smooth"})
    })


    var beforeSlide = new Swiper(".before-slide", {
        effect:"fade",
        loop:true,
        speed:1000,
        navigation:{
            nextEl:".next",
            prevEl:".prev"
        }
    });


    $(window).scroll(function(){
        curr=$(this).scrollTop();
        scwith = $('.sc-with').offset().top;


        if (curr >= scwith) {
            $('.sc-with').addClass('on')
        }


    })


    var reviewSlide = new Swiper(".review-slide", {
        
        slidesPerView:2.5,
        spaceBetween:24,
        autoplay:{
            delay:1500,
            disableOnInteraction:false
    
        },

        loop:true,
        // speed:1000,
        navigation:{
            nextEl:".sc-review .next",
            prevEl:".sc-review .prev"
        }
    });

}) //지우지마세요


