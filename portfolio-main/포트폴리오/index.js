$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >600) {
        //console.log('a');
        $("header").addClass("active");
    } else {
        //console.log('a');
        $("header").removeClass("active");
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll > 600) {
        //console.log('a');
        $(".head-inner").addClass("active2");
    } else {
        //console.log('a');
        $(".head-inner").removeClass("active2");
    }
});