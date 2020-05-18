$(document)
    .ready(function () {

        // Match Height 
        // $('.slide-text').matchHeight(); 
        new WOW().init({mobile: false});




        $(".smooth").on('click', function () {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick)
                .offset()
                .top - 75;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        });


        

        // $('select').niceSelect();

        // $('.nice-select-one .option').click(function () {
        //     $(this)
        //         .parents('.nice-select')
        //         .find('.current')
        //         .css('background', $(this).css('background'));

        //     alert($(this).attr('data-value'))
        // })



        var activeId = $(".check-active .active").attr('data-val') ;

        $(".checks label:nth-child("+ activeId +") a").addClass('active');
        // $(".checks label input")

        $('.nested-content a').removeClass('active');
        $('.nested-content li:nth-child('+activeId +') a').addClass('active');

        var nesteds = $('.nested');

        nesteds.each(function () {
            var img;
            img = (activeId == 1) ?  "flag.png" : (activeId == 2) ? "flag2.jpg" : (activeId == 3) ? "flag3.png" : (activeId == 4) ? "flag4.png" : "";
            $(this).find(".nested-btn-img").css("background","url(img/" + img + ") no-repeat center");


            var nested = $(this);
            nested.find('.nested-btn')
                .click(function () {
                    if ($(this).hasClass('active')) {
                        nested
                            .find('.nested-content')
                            .fadeOut();
                        $(this).removeClass('active');
                    } else {
                        nested
                            .find('.nested-content')
                            .fadeIn();
                        $(this).addClass('active');
                    }
                })


                


            $(document).mouseup(function (e) {
                var div =             nested.find('.nested-btn');
                var div2 =             nested.find('.nested-content')

                if (div.hasClass('active')) {
                    if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
                        div.removeClass('active');
                        div2.fadeOut();
                    }
                }
            });

        })











        var swiper1 = new Swiper('.swiper1', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            // autoHeight:true, autoplay:{     delay:3500, },
            speed: 500,

            pagination: {
                el: '.pag1',
                clickable: true
            },

            navigation: {
                nextEl: '.next1',
                prevEl: '.prev1'
            }
        })

        var swiper2 = new Swiper('.swiper2', {
            direction: 'horizontal',
            slidesPerView: 1,
            // initialSlide:5,
            loop: true,
            // autoplay:true,
            speed: 500,
            // autoHeight:true,

            pagination: {
                el: '.pag2',
                clickable: true
            },

            navigation: {
                nextEl: '.next2',
                prevEl: '.prev2'
            }
        })

        setTimeout(()=>{
            $('html, body').animate({
                scrollTop:$(document).scrollTop() + 20
            },300)
        },300)

                                            
                              


        swiper2.on('transitionEnd', function () {
            $('.items:not(.items' + (7 - swiper2.realIndex) + ') .items__layer .items__item').addClass('unanimate');
        })

        swiper2.on('transitionStart', function () {
            $('.items' + (7 - swiper2.realIndex) + ' .items__layer .items__item').removeClass('unanimate');
        })

        $('.slider-section').scrollie({
            direction: 'both',
            scrollOffset: -450,
            scrollingInView: function (elem, offset, direction, coords, scrollRatio, thisTop, winPos) {
                if (swiper2.realIndex === 0) {
                    $('.items7 .items__layer .items__item').removeClass('unanimate');
                }
            }
        })

        if ($(document).scrollTop() > $('.slider-section').offset().top && $(document).scrollTop() < ($('.slider-section').offset().top + $('.slider-section').height() - 600)) {
            if (swiper2.realIndex === 0) {
                $('.items7 .items__layer .items__item').removeClass('unanimate');
            }
        }

        $(".ham")
            .click(function () {
                $(".mobile-nav").toggleClass('active');
            });

        $(".close").click(function () {
            $(".mobile-nav").toggleClass('active');
        });

        $(".mobile-nav a").click(function () {
            $(".mobile-nav").toggleClass('active');
        })

        $(document).scroll(function () {
            if ($(document).scrollTop() > 0) {
                $('.header-section').addClass('sticky');
            } else {
                $('.header-section').removeClass('sticky');
            }
        })

        if ($(document).scrollTop() > 0) {
            $('.header-section').addClass('sticky');
        }

        var scene = document.getElementById('js-scene');
        var parallax1 = new Parallax(scene);

        var scene2 = document.getElementById('js-scene2');
        var parallax2 = new Parallax(scene2);

        var scene3 = document.getElementById('js-scene3');
        var parallax3 = new Parallax(scene3);

        var scene4 = document.getElementById('js-scene4');
        var parallax4 = new Parallax(scene4);

        var scene5 = document.getElementById('js-scene5');
        var parallax5 = new Parallax(scene5);

        var scene6 = document.getElementById('js-scene6');
        var parallax6 = new Parallax(scene6);

        var scene7 = document.getElementById('js-scene7');
        var parallax7 = new Parallax(scene7);

        // $.fancybox.open({
        //     src:"#popup8",
        //     clickSlide:false,
        //     touch:false,
        //     keyboard: false,
        // });

    


        $(".not-to-close").click(function () {
            $('.over').css("display", "block");
        })

    })