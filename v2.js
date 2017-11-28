$( document ).ready(function() {
//Opens the sidenav
$('.sidenav').sidenav();
$(".brand-logo").addClass("right");

var win = $(this);
      if (win.width() < 992) { 
      // $(".brand-logo").hide();
      $('.brand-logo').removeClass('right');
      $('.brand-logo').addClass('center');
      }else{
        $('.brand-logo').addClass('right');
      $('.brand-logo').removeClass('center');
      }
});

$(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 992) { 
      // $(".brand-logo").hide();
      $('.brand-logo').removeClass('right');
      $('.brand-logo').addClass('center');
      }else{
        $('.brand-logo').addClass('right');
      $('.brand-logo').removeClass('center');
      }
      // var win2 = $(this);
      // if (win2.width() < 691) { 
      // // $(".brand-logo").hide();
      // $('.work-cards').removeClass('col s6 m6');
      // $('.work-cards').addClass('col s12 m12');
      // }else{
      //   $('.work-cards').addClass('col s6 m6');
      // $('.work-cards').removeClass('col s12 m12');
      // }
});
// };

//Closes the sidenav once the user clicks on an item or in the blank space

// $("#mobile-demo").on("click", function styleChange(){
// 	$("#mobile-demo").css({
// 		"transform": "translateX(-105%)"
// 	});
// });

//Opens it back up once the hamburger is clicked

// $("#hamburger").on("click", function styleReset(){
// 	$("#mobile-demo").css({
// 		"transform": "translateX(0%)"
// 	});
// });