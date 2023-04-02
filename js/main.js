$(document).ready(function(){
    //***** ripple effect start******
    "use strict"
    $(".slider").ripples({
        // dropRadius: 10,
        // perturbance:0.01,
        resolution:1080,
        dropRadius: 12,
        perturbance:0.05,

      });
      // //for automatic rippleing
      // setInterval(function() {
      //   var $el = $(".slider");
      //   var x = Math.random() * $el.outerWidth();
      //   var y = Math.random() * $el.outerHeight();
      //   var dropRadius = 12;
      //   var strength = 0.04 + Math.random() * 0.04;
      
      //   $el.ripples("drop", x, y, dropRadius, strength);
      // }, 11000);
      
    // ===ripple effect End======//
    //****** nav bar start ******
      jQuery('.toggle-nav').click(function(e) {
		jQuery(this).toggleClass('active');
		jQuery('.menu ul').toggleClass('active');

		e.preventDefault();
	});
      //nav bar transparent
      $(".menu-icon").on("click", function() {
            $("nav ul").toggleClass("showing");
            });
       });

        // Scrolling Effect of nav bar
        $(window).on("scroll", function() {
        if($(window).scrollTop()) {
                $('nav').addClass('black');
        }
        
        else {
                $('nav').removeClass('black');
        }
     //=====nav bar End======//
    //===Skill showcase tab design======
    
		$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
//======== Skills ===============//

});
// $('#aboutcall').click(function() {
    $('.skill-per').each(function(){
      var $this = $(this);
      var per = $this.attr('per');
      $this.css("width",per+'%');
      $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
          $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
      });
    });
// });
