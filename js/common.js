// ПЛАВНЫЙ СКРОЛЛИНГ ПО СТРАНИЦЕ  
$(document).ready(function () {
     //Chrome Smooth Scroll 
     try {
          $.browserSelector();
          if ($("html").hasClass("chrome")) {
               $.smoothScroll();
          }
     } catch (err) {

     };
     // КОНЕЦ ПЛАВНОГО СКРОЛЛИНГА 

     // ПОДКЛЮЧАЕМ ПЛАВНЫЙ СКРОЛЛ НА ЯКОРЬ 
     $("#responsive_menu").on("click", "a", function (event) {
          event.preventDefault();
          var id = $(this).attr('href'),
               top = $(id).offset().top;
          $('body,html').animate({
               scrollTop: top
          }, 1000);
     });

     // КОНЕЦ ПЛАВНОГО СКРОЛЛА НА ЯКОРЬ 

     // ПОДКЛЮЧАЕМ ПЛАВНЫЙ СКРОЛЛ ВВЕРХ СТРАНИЦЫ 
     $(function () {
          $.fn.scrollToTop = function () {
               $(this).hide().removeAttr("href");
               if ($(window).scrollTop() != "0") {
                    $(this).fadeIn("slow")
               }
               var scrollDiv = $(this);
               $(window).scroll(function () {
                    if ($(window).scrollTop() == "0") {
                         $(scrollDiv).fadeOut("slow")
                    } else {
                         $(scrollDiv).fadeIn("slow")
                    }
               });
               $(this).click(function () {
                    $("html, body").animate({
                         scrollTop: 0
                    }, 1300)
               })
          }
     });
     $(function () {
          $("#toTop").scrollToTop();
     });
     // КОНЕЦ ПЛАВНОГО СКРОЛЛА НА ВВЕРХ СТРАНИЦЫ 




     //СЛАЙДЕР ОТЗЫВОВ 
     $('#custom_carousel').on('slide.bs.carousel', function (evt) {
               $('#custom_carousel .controls li.active').removeClass('active');
               $('#custom_carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
          })
          //КОНЕЦ СЛАЙДЕРА ОТЗЫВОВ 

     ////ОТПРАВКА ФОРМ АЯКС 
     $("#callback_1").submit(function () {
          $.ajax({
               type: "GET",
               url: "mail.php",
               data: $("#callback_1").serialize()
          }).done(function () {
               alert("Спасибо за заявку!");
               setTimeout(function () {
                    $.fancybox.close();
               }, 1000);
          });
          return false;
     });

     $("#callback_2").submit(function () {
          $.ajax({
               type: "GET",
               url: "mail.php",
               data: $("#callback_2").serialize()
          }).done(function () {
               alert("Спасибо за заявку!");
               setTimeout(function () {
                    $.fancybox.close();
               }, 1000);
          });
          return false;
     });

     $("#callback_3").submit(function () {
          $.ajax({
               type: "GET",
               url: "mail.php",
               data: $("#callback_3").serialize()
          }).done(function () {
               alert("Спасибо за заявку!");
               setTimeout(function () {
                    $.modal.close();
               }, 1000);
          });
          return false;
     });
    
    $("#callback_4").submit(function () {
          $.ajax({
               type: "GET",
               url: "mail.php",
               data: $("#callback_4").serialize()
          }).done(function () {
               alert("Спасибо за заявку!");
               setTimeout(function () {
                    $.modal.close();
               }, 1000);
          });
          return false;
     });

     // НАЧАЛО ВСПЛЫВАЮЩЕГО БЛОКА
     $('.po-link').popover({
          trigger: 'hover',
          html: true,
          title: function () {
               return $(this).parent().find('.po-title').html();
          },
          content: function () {
               return $(this).parent().find('.po-body').html();
          },

          container: 'body',
          placement: 'bottom'

     });
     // КОНЕЦ ВСПЛЫВАЮЩЕГО БЛОКА

    
    
}); //КОНЕЦ READY.FUNCTION


