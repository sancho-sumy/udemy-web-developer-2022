// $(document).ready(function () {
//     $(".carousel__inner").slick({
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
//         speed: 1200,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     dots: true,
//                     arrows: false,
//                 },
//             },
//         ],
//     });
// });

const slider = tns({
    container: ".carousel__inner",
    items: 1,
    slideBy: "page",
    autoplay: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
});

document.querySelector(".prev").addEventListener("click", function () {
    slider.goTo("prev");
});

document.querySelector(".next").addEventListener("click", function () {
    slider.goTo("next");
});

$(document).ready(function () {
    $(function () {
        $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
            $(this).addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active").closest("div.container").find("div.catalog__content").removeClass("catalog__content_active").eq($(this).index()).addClass("catalog__content_active");
        });
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
                $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
            });
        });
    }

    toggleSlide(".catalog-item__link");
    toggleSlide(".catalog-item__back");

    $("[data-modal=consultation]").on("click", function () {
        $(".overlay, #consultation").fadeIn("slow");
    });

    $("[data-modal=modal_close]").on("click", function () {
        $(".overlay, #order, #consultation, #thanks").fadeOut("slow");
    });

    $(".button_mini").each(function (i) {
        $(this).on("click", function () {
            $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
            $(".overlay, #order").fadeIn("slow");
        });
    });

    $(".feed-form").each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    normalizer: function (value) {
                        return $.trim(value);
                    },
                },
                phone: {
                    required: true,
                    minlength: 16,
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: "Пожалуйста, введите свое имя!",
                phone: {
                    required: "Пожалуйста, введите свой телефон!",
                    minlength: "Пожалуйста, проверьте правильность ввода!",
                },
                email: {
                    required: "Пожалуйста, введите свое имя!",
                    email: "Неправильно введен адрес!",
                },
            },
        });
    });
    $("form").submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize(),
        }).done(function () {
            $(this).find("input").val("");
            $("#consultation, #order").fadeOut("slow");
            $(".overlay, #thanks").fadeIn("slow");
            $("form").trigger("reset");
        });
        return false;
    });
});

$("input[name=phone]")
    .toArray()
    .forEach(function (field) {
        new Cleave(field, {
            phone: true,
            phoneRegionCode: "UA",
            prefix: "+380",
            numericOnly: true,
            blocks: [0, 2, 3, 4],
            delimiters: ["(", ") ", "-"],
            noImmediatePrefix: true,
        });
    });
