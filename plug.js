$(function(){
    $('.redy').click(function(){
      let image = $('.pic');
      image.attr('src', 'img/img-red.jpeg');
      image.append('.image-div');
    })

    $('.purply').click(function(){
        let image = $('.pic');
        image.attr('src', 'img/img-purple.jfif');
        image.append('.image-div');
      })
})
  
