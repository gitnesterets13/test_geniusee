$(function() {
  $.scrollify({
		section:".panel",
    scrollbars:true,
    overflowScroll: true,
    scrollSpeed:400,
    before:function(i,panels) {

      var ref = panels[i].attr("data-section-name");

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

      if ($('.pagination li:nth-child(2) a').hasClass('active')) {
          $('.home-header').addClass('active1');
          $('.sidebar-left').addClass('active1');
          $('.sidebar-right').addClass('active1');
          $('.home-header').removeClass('active2');
          $('.sidebar-right').removeClass('active2');
          $('.sidebar-left').removeClass('active2');
          $(".next-arrow").attr("href", "#third");
      } else if ($('.pagination li:nth-child(3) a').hasClass('active')) {
          $('.home-header').removeClass('active1');
          $('.home-header').addClass('active2');
          $('.sidebar-right').removeClass('active1');
          $('.sidebar-right').addClass('active2');
          $('.sidebar-left').addClass('active2');
          $(".next-arrow").attr("href", "#home");
      } else {
          $('.home-header').removeClass('active1');
          $('.sidebar-left').removeClass('active1');
          $('.sidebar-right').removeClass('active1');
          $(".next-arrow").attr("href", "#about");
      }

    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".navigation-block").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
    }
  });


  $(".scroll-btn").click(function(e) {
    e.preventDefault();
    $.scrollify.next();
  });


    if($(window).width() <= 767) {
        $('.home-redtext-mobile').detach().appendTo('.home .vertical-center');
        $('.home-description').detach().appendTo('.home .vertical-center');
        $('.home-arrowblock').detach().appendTo('.home-description');
        $('.sidebar-left').detach().appendTo('.home-header .inner');
    } else {
        $('.home-redtext-mobile').detach().appendTo('.home-left');
        $('.home-description').detach().appendTo('.home-left');
        $('.home-arrowblock').detach().appendTo('.home-left');
        $('.sidebar-left').detach().appendTo('body');
    }


    $(window).on('resize', function(){
        if($(window).width() <= 767) {
          $('.home-redtext-mobile').detach().appendTo('.home .vertical-center');
          $('.home-description').detach().appendTo('.home .vertical-center');
          $('.home-arrowblock').detach().appendTo('.home-description');
          $('.sidebar-left').detach().appendTo('.home-header .inner');
        } else {
          $('.home-redtext-mobile').detach().appendTo('.home-left');
          $('.home-description').detach().appendTo('.home-left');
          $('.home-arrowblock').detach().appendTo('.home-left');
          $('.sidebar-left').detach().appendTo('body');
        }
    });

});
