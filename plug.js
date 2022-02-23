$(function(){
    $('.redy').click(function(){
      let image = $('.pic');
      image.attr('src', 'img/img-red.jpeg');
      image.append('.image-div');
      $('.redy').animate({
          width : "50px",
          height : "50px",
      }, function(){
          $('.purply').animate({
              width:'25px',
              height : '25px'
          }, function(){
              $('.grey').animate({
                  width : '25px',
                  height : '25px',
              });
          });
      });
    });

    $('.purply').click(function(){
        let image = $('.pic');
        image.attr('src', 'img/img-purple.jfif');
        image.append('.image-div');
        image.addClass('w-100');
        $('.purply').animate({
            width: "50px",
            height: "50px",
        }, function(){
            $('.redy').animate({
                width: '25px',
                height : "25px",
            }, function(){
                $('.grey').animate({
                    width:'25px',
                    height: '25px',
                });
            });
           
        });
      });


      $('.grey').click(function(){
        let image = $('.pic');
        image.attr('src', 'img/img-white.jfif');
        image.append('.image-div');
        image.addClass('w-100');

        $('.grey').animate({
            width : '50px',
            height: "50px",
        }, function(){
            $('.purply').animate({
                width : '25px',
                height : '25px',
            }, function(){
                $('.redy').animate({
                    width : '25px',
                    height : '25px',
                });
            });
        });
      });

      $('.butty').click(function(){
        event.preventDefault();
         $(this).toggleClass('backy');
      })
  
});
  
