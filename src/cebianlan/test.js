$(function() {
    var sidebarTop = $('.J-sidebar').offset().top - 20;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > sidebarTop) {
            $(".J-sidebar").css({ position: "fixed", top: "20px", width: '220px' });
        } else {
            $(".J-sidebar").css({ position: "relative", top: "auto", width: '220px' });
        }

        $('.J-sidebar li').each(function () {
            var target = '.' + $(this).attr('data-index');
            if (scrollTop > $(target).offset().top - 20) {
                $('.J-sidebar li').removeClass('active');
                $(this).addClass('active');
            }
        })
    });

    $(".J-sidebar li").click(function (e) {
        var target = '.' + $(this).attr('data-index');
        $("html,body").animate({ scrollTop: $(target).offset().top }, 300)
    });
})