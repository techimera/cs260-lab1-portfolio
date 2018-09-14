$(document).ready(function(){
            $(".topmenu>div").click(function(){
                var submenu = $(this).next("ul");
                if( submenu.is(":visible") ){
                submenu.slideUp();
                }else{
                submenu.slideDown();
                }
            });
});

$(document).ready(function(){
            $(".othermenu>div").click(function(){
                var submenu = $(this).next("ul");
                if( submenu.is(":visible") ){
                submenu.slideUp();
                }else{
                submenu.slideDown();
                }
            });
});