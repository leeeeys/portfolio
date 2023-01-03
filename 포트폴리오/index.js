$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 500) {
        //console.log('a');
        $("header").addClass("active");
    } else {
        //console.log('a');
        $("header").removeClass("active");
    }
});