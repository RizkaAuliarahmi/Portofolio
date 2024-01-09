$(document).ready(function () {
    $('nav a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $.scrollify.move(target);
    });

    $.scrollify({
        section: ".scroll",
        sectionName: "section-name",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });

    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop();
        $('section').each(function () {
            var offset = $(this).offset().top;
            console.log("ofset"+offset);
            var sectionId = $(this).attr('data-section-name');
            console.log("sectionId"+sectionId);

            if (scrollPosition >= offset && scrollPosition < offset + $(this).height()) {
                $('nav a').removeClass('active');
                $('nav a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
});
